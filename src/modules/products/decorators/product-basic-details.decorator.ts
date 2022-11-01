import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ProductFieldMapper, ProductFields } from '../dto/product-dto';

export const ProductBasicDetails = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const product = {};
    ProductFields.forEach(
      (value: string) => (product[value] = request.body[value]),
    );
    return product;
  },
);
