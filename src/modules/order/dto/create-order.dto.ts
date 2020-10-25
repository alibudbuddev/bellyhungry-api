import OrderItemDto from './order-item.dto';
import { sumBy } from 'lodash';

export default class CreateOrderDto {
	customer?: string;
  customerDetails: object | null;
  items: OrderItemDto[] = [];
  discount?: number = 0;
  totalPrice?: number = 0;
  shippingFee?: number = 0;

  constructor(order: {customer?: string, customerDetails: object | null, items: OrderItemDto[]}) {
    const items = order.items.map(x => {
      x = new OrderItemDto(x);
      return x;
    })
    this.totalPrice = sumBy(items, 'totalPrice');
    this.customerDetails = order.customerDetails;
    this.customer = order.customer;
    this.items = items;
  }

  getFields(): any {
    const order = {
      customer: this.customer,
      customerDetails: this.customerDetails,
      items: this.items,
      totalPrice: this.totalPrice,
      discount:  this.discount,
      shippingFee:  this.shippingFee
    }
    return order;
  }
}