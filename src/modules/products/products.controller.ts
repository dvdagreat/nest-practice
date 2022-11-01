import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductBasicDetails } from './decorators/product-basic-details.decorator';
import { ProductOwnerDetails } from './decorators/product-owner-details.decorator';
import { ProductBasicDto, ProductOwnerDto } from './dto/product-dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UsePipes(
    new ValidationPipe({ transform: true, validateCustomDecorators: true }),
  )
  @Post()
  create(
    @ProductBasicDetails() productDetails: ProductBasicDto,
    @ProductOwnerDetails() ownerDetails: ProductOwnerDto,
  ) {
    return { productDetails, ownerDetails };
  }
}
