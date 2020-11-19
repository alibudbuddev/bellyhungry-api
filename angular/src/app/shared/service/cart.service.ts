import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';
import ShoppingCart, { CustomerDeliveryDetails } from '@shared/class/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export default class CartService {
	private cartChangeSource = new Subject<any>();
	public cart$ = this.cartChangeSource.asObservable();
	public cart: ShoppingCart;

  constructor() { }

  init(): void {
  	this.cart = new ShoppingCart();
  }

  resetCart(): void {
  	this.cart.reset();
  	this.updatView()
  }

  addItem(item: any): void {
		this.cart.addItem(item);
		this.updatView();
	}

	removeItem(index: number): void {
		this.cart.removeItem(index);
		this.updatView();
	}

	updateItem(item: any): void {
		this.cart.updateItem(item);
		this.updatView();
	}

	updateDeliveryDetails(details: CustomerDeliveryDetails): void {
		this.cart.updateCustomerDeliveryDetails(details);
		this.updatView();
	}

	updatView(): void {
		localStorage.setItem('cartHistory', JSON.stringify(this.cart));
		this.cartChangeSource.next(this.cart);
	}
}
