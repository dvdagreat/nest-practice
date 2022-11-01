import { Sequelize } from 'sequelize-typescript';
import { UserRole } from '../user-roles/entities/user-role.entity';
import { User } from '../users/entities/user.model';
import { UserDetails } from '../users/entities/user-detail.model';
import { Product } from '../products/entities/product.model';
import { ProductImage } from '../products/entities/product-image.model';
import { ProductLike } from '../products/entities/product-like.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        password: 'password',
        username: 'postgres',
        port: 5432,
        database: 'my_store',
      });

      sequelize.addModels([
        User,
        UserDetails,
        UserRole,
        Product,
        ProductImage,
        ProductLike,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
