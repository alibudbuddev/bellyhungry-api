import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@modules/user/user.module';
import { ProductModule } from '@modules/product/product.module';
import { OrderModule } from '@modules/order/order.module';
import { CartModule } from '@modules/cart/cart.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  	MongooseModule.forRoot(process.env.DB_CONNECTION),
  	UserModule,
  	ProductModule,
  	OrderModule,
  	CartModule,
  	AuthModule
  ]
})
export class AppModule {}
