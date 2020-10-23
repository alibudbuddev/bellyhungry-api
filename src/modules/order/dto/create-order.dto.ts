import OrderItemsDto from './order-items.dto';
import { sumBy } from 'lodash';

export default class CreateOrderDto {
	customer: number;
  orderItems: any[] = [];
  discount?: number;
  total: number = 0;
  shippinFee?: number;

  constructor(order: {customer: string, orderItems: OrderItemsDto[]}) {
  	this.generateTotal(order.orderItems);
  }

  private generateTotal(orderItems: OrderItemsDto[]): any {
  	this.total = sumBy(orderItems, 'price');
  }
}