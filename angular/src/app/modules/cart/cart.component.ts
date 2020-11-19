import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit, OnDestroy {
	public items: any[] = [];
  public cart: any;
	private cartSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cart = cartService.cart;
  	this.items = this.cartService.cart.getItems();
  }

  ngOnInit() {
  	this.cartSubscription =
	  	this.cartService.cart$.subscribe(data => {
	  		this.items = data.items;
	  	});
  }

  onRemoveItemClick(index: number): void {
  	this.cartService.removeItem(index);
  }

  onQtyChange(item: any, index: number): void {
  	if (parseInt(item.qty)) {
  		item.qty = parseInt(item.qty);
      this.cartService.updateItem(item);
  	}
  }

  trackByProduct(index, item) {
  	return item.product;
  }

  ngOnDestroy() {
  	if (this.cartSubscription) {
  		this.cartSubscription.unsubscribe();
  	}
  }

}
