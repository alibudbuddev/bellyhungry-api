export default class OrderItemsDto {
	product: string;
	price: number;
	qty: number;
	discount?: number;
	shippingFee?: number;
	totalPrice?: number;
	status?: string;
}