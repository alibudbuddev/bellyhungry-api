import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { OrderModule } from '@modules/order/order.module';
import { OrderItem, OrderItemSchema } from '@schema/order-items.schema';

@Module({
  controllers: [MerchantController],
  imports: [OrderModule]
})
export class MerchantModule {}
