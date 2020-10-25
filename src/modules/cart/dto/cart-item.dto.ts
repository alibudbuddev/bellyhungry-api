export default class CartItemDto {
  customer: string;
  product: string;
  price: number;
  totalPrice?: number = 0;
  qty: number;

  constructor(cart: CartItemDto, customer: string) {
    this.customer = customer;
    this.totalPrice = cart.qty * cart.price;
  }
}