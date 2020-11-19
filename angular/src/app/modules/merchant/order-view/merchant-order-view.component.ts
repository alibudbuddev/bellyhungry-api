import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from './../merchant.service';

@Component({
  selector: 'app-merchant-order-view',
  templateUrl: './merchant-order-view.component.html',
  styleUrls: ['./merchant-order-view.component.less'],
  providers: [MerchantService]
})
export class MerchantOrderViewComponent implements OnInit {
	private id: string;

  constructor(
  	private merchantService: MerchantService,
  	private activatedRoute: ActivatedRoute
 	) {
  	this.id = activatedRoute.snapshot.params.id;
 	}

  ngOnInit() {
  	this.getOrder();
  }

  getOrder(): void {
  	this.merchantService.order(this.id)
      .subscribe(order => {
        
      });
  }

}
