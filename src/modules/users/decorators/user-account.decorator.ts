import { SetMetadata } from '@nestjs/common';

export const UserAccount = (...args: string[]) =>
  SetMetadata('user-account', args);
