import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import FeedService from '@shared/service/feed.service';
import CartService from '@shared/service/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less'],
  providers: [FeedService]
})
export class ProductViewComponent implements OnInit {
	private productId: string;
	public product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedService: FeedService,
    private cartService: CartService,
    private router: Router,
  ) {
  	this.productId = activatedRoute.snapshot.params['id'];
  	this.getProduct();
  }

  ngOnInit() {
  	
  }

  getProduct(): void {
  	this.feedService.getProduct(this.productId)
  		.subscribe(product => {
  			this.product = product;
  		});
  }

  addToCart(isBuyNow: boolean = false): void {
    const item = {
      product: this.product._id,
      productDetails: this.product,
      merchant: this.product.merchant,
      price: this.product.price,
      qty: 1
    };
    this.cartService.addItem(item);

    if (isBuyNow) {
      this.router.navigate(['/cart']);
    }
  }

}
