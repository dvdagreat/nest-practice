import { Module } from '@nestjs/common';
import { ProductCommentsService } from './product-comments.service';
import { ProductCommentsController } from './product-comments.controller';

@Module({
  controllers: [ProductCommentsController],
  providers: [ProductCommentsService],
})
export class ProductCommentsModule {}
