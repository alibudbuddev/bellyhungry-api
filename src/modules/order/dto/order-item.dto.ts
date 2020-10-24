export default class OrderItemDto {
	product: string;
	merchant: string;
	price: number;
	qty: number;
	discount?: number;
	shippingFee?: number;
	totalPrice?: number;
	status?: string;
}