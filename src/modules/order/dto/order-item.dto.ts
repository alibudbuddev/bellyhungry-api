export default class OrderItemDto {
	product: string;
	merchant: string;
	price: number;
	qty: number;
	discount?: number;
	shippingFee?: number;
	totalPrice?: number;
	status?: string;

	constructor(order: any) {
		this.product = order.product;
		this.merchant = order.merchant;
		this.price = order.price;
		this.qty = order.qty;
		// this.discount = order.discount;
		// this.shippingFee = order.shippingFee;
		this.totalPrice = order.qty * order.price;
		// this.status = order.status;
	}
}