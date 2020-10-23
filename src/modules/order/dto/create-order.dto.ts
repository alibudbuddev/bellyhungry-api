import OrderItemsDto from './order-items.dto';

export default class CreateOrderDto {
	customer: number;
  orderItems: any[] = [];
  discount?: number;
  total: number = 0;
  shippinFee?: number;

  constructor(order: {customer: string, orderItems: OrderItemsDto[]}) {
  	this.generateTotal();
  }

  private generateTotal(): any {
  	this.total = 0;
  }
}