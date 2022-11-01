import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Min,
} from 'class-validator';

export class ProductFieldMapper {
  static FIELD_name = 'products_name';
  static FIELD_quantity = 'quantity';
  static FIELD_owner_name = 'product_owner';
  static FIELD_owner_age = 'product_owner_age';
  static FIELD_owner_phone = 'product_owner_phone';
}

// product fields expected in the create product request
export const ProductFields = [
  ProductFieldMapper.FIELD_name,
  ProductFieldMapper.FIELD_quantity,
];

// product fields validations and transformations
export class ProductBasicDto {
  @Expose({ name: ProductFieldMapper.FIELD_name })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose({ name: ProductFieldMapper.FIELD_quantity })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  quantity: number;
}

// product owner fields expected in the create product request
export const ProductOwnerFields = [
  ProductFieldMapper.FIELD_owner_name,
  ProductFieldMapper.FIELD_owner_age,
  ProductFieldMapper.FIELD_owner_phone,
];

// product owner fields validations and transformations
export class ProductOwnerDto {
  @Expose({ name: ProductFieldMapper.FIELD_owner_name })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose({ name: ProductFieldMapper.FIELD_owner_age })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  age: number;

  @Expose({ name: ProductFieldMapper.FIELD_owner_phone })
  @IsNotEmpty()
  @IsPhoneNumber('IN')
  phone: number;
}
