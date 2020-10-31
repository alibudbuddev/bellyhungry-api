import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { Order, OrderSchema } from '@modules/order/order.schema';
import { OrderItem, OrderItemSchema } from '@schema/order-items.schema';

@Module({
  controllers: [MerchantController],
  imports: [
		MongooseModule.forFeature([
			{ name: Order.name, schema: OrderSchema },
			{ name: OrderItem.name, schema: OrderItemSchema }
		])
	],
  providers: [MerchantService]
})
export class MerchantModule {}
