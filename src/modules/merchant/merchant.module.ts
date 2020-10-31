import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { OrderModule } from '@modules/order/order.module';
import { OrderItem, OrderItemSchema } from '@schema/order-items.schema';
import { MerchantService } from './merchant.service';

@Module({
  controllers: [MerchantController],
  imports: [OrderModule],
  providers: [MerchantService]
})
export class MerchantModule {}
