import { findIndex, sumBy } from 'lodash';

export interface ItemInterface {
	product: string;
	productDetails: any;
	merchant: string;
	price: string;
	totalPrice?: number;
	qty: number;
}

export class CustomerDeliveryDetails {
	name: string;
  shippingAddress: string;
  contactNo: string;
  facebookName?: string
  contactEmail?: string
  other?: string

  constructor() {
  	this.name = '';
		this.shippingAddress = '';
		this.contactNo = '';
  }
}

export default class ShoppingCart {
	private items: ItemInterface[] = [];
	private totalPrice: number = 0;
	private totalItems: number = 0;
	private customerDeliveryDetails: CustomerDeliveryDetails = new CustomerDeliveryDetails();

	constructor(items: any[] = []) {
		if (items.length > 0) {
			this.calculate(items);
		} else {
			let cartHistory = localStorage.getItem('cartHistory');
			if (cartHistory) {
				let cartData = JSON.parse(cartHistory);
				if (cartData.customerDeliveryDetails) {
					this.updateCustomerDeliveryDetails(cartData.customerDeliveryDetails);
				}
				if (cartData.items) {
					this.calculate(cartData.items);
				}
			}
		}
	}

	reset(): void {
		this.customerDeliveryDetails = new CustomerDeliveryDetails();
		this.calculate([]);
	}

	getItems(): any[] {
		return this.items;
	}

	getCustomerDeliveryDetails(): CustomerDeliveryDetails {
		return this.customerDeliveryDetails;
	}

	updateItem(item: ItemInterface): void {
		const currentItemIndex: any = findIndex(this.items, {product: item.product});
		if (currentItemIndex >= 0) {
			this.items[currentItemIndex] = item;
			this.calculate(this.items);
		}
	}

	updateCustomerDeliveryDetails(details: CustomerDeliveryDetails): void {
		this.customerDeliveryDetails = details;
	}

	addItem(item: ItemInterface): void {
		if (!item.hasOwnProperty('totalPrice')) {
			item.totalPrice = 0;
		}

		// Check if item is already in the cart.
		const currentItemIndex: any = findIndex(this.items, {product: item.product});

		if (currentItemIndex >= 0) {
			item.qty += this.items[currentItemIndex].qty;
			this.items.splice(currentItemIndex, 1, item);
		} else {
			this.items.push(item);
		}
		this.calculate(this.items);
	}

	removeItem(index: number): void {
		this.items.splice(index, 1);
		this.calculate(this.items);
	}

	getTotalPrice(): number {
		return this.totalPrice;
	}

	getTotalItems(): number {
		return this.totalItems;
	}

	private calculate(items: any[] = []): any {
		this.items = items.map(item => {
			item = this.calculateItemTotalPrice(item);
			return item;
		});
		this.calculateTotalAmount();
	}

	private calculateItemTotalPrice(item: any): any {
		item.totalPrice = item.qty * item.price;
		return item;
	}

	private calculateTotalAmount(): any {
		let totalPrice = 0;
		this.items.forEach(data => {
			totalPrice += data.totalPrice;
			this.totalItems += data.qty;
		});

		this.totalItems = sumBy(this.items, 'qty');
		this.totalPrice = totalPrice;
	}
}