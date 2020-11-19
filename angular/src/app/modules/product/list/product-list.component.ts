import { Component, OnInit } from '@angular/core';
import FeedService from '@shared/service/feed.service';
import { trackById } from '@shared/util/helpers';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  providers: [FeedService]
})
export class ProductListComponent implements OnInit {
  public trackById = trackById;
	public products: any[] = [];

  constructor(private feedService: FeedService, private cartService: CartService) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(): void {
  	this.feedService.products()
  		.subscribe(products => {
  			this.products = products;
  		});
  }

  addToCart(product: any): void {
    const item = {
      product: product._id,
      productDetails: product,
      merchant: product.merchant,
      price: product.price,
      qty: 1
    };
    this.cartService.addItem(item);
  }
}
