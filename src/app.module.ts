import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { ProductsModule } from './modules/products/products.module';
import { UserRolesModule } from './modules/user-roles/user-roles.module';
import { ProductCommentsModule } from './modules/product-comments/product-comments.module';
import { CartsModule } from './modules/carts/carts.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShippingModule } from './modules/shipping/shipping.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ProductsModule,
    UserRolesModule,
    ProductCommentsModule,
    CartsModule,
    OrdersModule,
    ShippingModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
