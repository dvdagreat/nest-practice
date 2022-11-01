import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize, Transaction } from 'sequelize';
import { IUserAccountCreateFields, User } from './entities/user.model';
import {
  IUserDetailsCreateFields,
  UserDetails,
} from './entities/user-detail.model';

@Injectable({
  scope: Scope.REQUEST,
})
export class UserRepository {
  constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {}

  private createUserAccount = async (
    user: IUserAccountCreateFields,
    t?: Transaction,
  ): Promise<User> => {
    return (await User.create(user, { transaction: t })).save();
  };

  private createUserDetails = async (
    details: IUserDetailsCreateFields,
    t?: Transaction,
  ): Promise<UserDetails> => {
    return (await UserDetails.create(details, { transaction: t })).save();
  };

  public create = async (
    user: IUserAccountCreateFields,
    details: IUserDetailsCreateFields,
  ): Promise<{ data: { userAccount: User; userDetails: UserDetails } }> => {
    return this.executeTransaction(this.createUserTransaction(user, details));
  };

  private createUserTransaction = (
    user: IUserAccountCreateFields,
    details: IUserDetailsCreateFields,
  ) => {
    return async (t: Transaction) => {
      const userAccount = this.createUserAccount(user, t);
      const userDetails = this.createUserDetails(details, t);

      return { data: { userAccount, userDetails } };
    };
  };

  private executeTransaction = async (
    callback: (t: Transaction) => Promise<any>,
  ) => {
    return await this.sequelize.transaction(callback);
  };

  public async findOne(username: string): Promise<User> {
    return await User.findOne({ where: { username } });
  }
}
