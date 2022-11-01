import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ProductOwnerFields } from '../dto/product-dto';

export const ProductOwnerDetails = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const owner = {};
    ProductOwnerFields.forEach(
      (value: string) => (owner[value] = request.body[value]),
    );
    return owner;
  },
);
