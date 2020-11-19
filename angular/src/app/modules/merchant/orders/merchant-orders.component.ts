import { Component, OnInit } from '@angular/core';
import { MerchantService } from './../merchant.service';
import { trackById } from '@shared/util/helpers';

@Component({
  selector: 'app-merchant-orders',
  templateUrl: './merchant-orders.component.html',
  styleUrls: ['./merchant-orders.component.less'],
  providers: [MerchantService]
})
export class MerchantOrdersComponent implements OnInit {
  public trackById = trackById;
  public orders: any[] = [];

  constructor(
  	private merchantService: MerchantService,
 	) {
 	}

  ngOnInit() {
  	this.getOrders();
  }

  getOrders(): void {
    this.merchantService.orders()
      .subscribe(orders => {
        this.orders = orders;
      });
  }

}
