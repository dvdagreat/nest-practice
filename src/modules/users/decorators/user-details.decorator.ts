import { SetMetadata } from '@nestjs/common';

export const UserDetails = (...args: string[]) =>
  SetMetadata('user-details', args);
