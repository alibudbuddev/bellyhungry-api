import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@modules/user/user.module';
import { ProductModule } from '@modules/product/product.module';
import { OrderModule } from '@modules/order/order.module';
import { CartModule } from '@modules/cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MerchantModule } from './modules/merchant/merchant.module';
import { FeedModule } from './modules/feed/feed.module';

@Module({
  imports: [
  	MongooseModule.forRoot(process.env.DB_CONNECTION, { useFindAndModify: false }),
  	UserModule,
  	ProductModule,
  	OrderModule,
  	CartModule,
  	AuthModule,
  	MerchantModule,
  	FeedModule
  ],
  controllers: [AppController]
})
export class AppModule {}
