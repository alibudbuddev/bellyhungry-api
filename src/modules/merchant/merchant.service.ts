import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order } from '@modules/order/order.schema';
import { OrderItem } from '@schema/order-items.schema';
import { MerchantOrderList, MerchantOrderDetails } from '@aggregates/index';

@Injectable()
export class MerchantService {
  private publicFields = {
    order: 'totalPrice discount customerDetails',
    items: 'discount price product qty shippingFee totalPrice'
  };

	constructor(
    @InjectModel(Order.name) private orderModel: Model<any>,
    @InjectModel(OrderItem.name) private orderItemModel: Model<any>
  ) {}

  async getOrderDetails(orderId: string, merchantId: string): Promise<any> {
    const pipeline = MerchantOrderDetails(Types.ObjectId(orderId), Types.ObjectId(merchantId));
    return this.orderModel.aggregate(pipeline);
  }

  async getOrders(merchantId: string): Promise<any[]> {
  	const pipeline = MerchantOrderList(Types.ObjectId(merchantId));
    return this.orderItemModel.aggregate(pipeline);
  }
}
