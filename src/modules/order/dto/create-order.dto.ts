import OrderItemsDto from './order-items.dto';
import { sumBy } from 'lodash';

export default class CreateOrderDto {
	customer: string;
  items: OrderItemsDto[] = [];
  discount?: number;
  totalPrice: number = 0;
  shippinFee?: number;

  constructor(order: {customer: string, items: OrderItemsDto[]}) {
    // Calculate total price per item.
    const items = order.items.map(x => {
      x.totalPrice = x.qty * x.price;
      return x;
    })
    this.totalPrice = sumBy(items, 'totalPrice');
    this.customer = order.customer;
    this.items = items;
  }

  getFields(): any {
    const order = {
      customer: this.customer,
      items: this.items,
      totalPrice: this.totalPrice
    }
    return order;
  }
}