import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '@shared/service/order.service';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.less'],
  providers: [OrderService]
})
export class OrderTrackComponent implements OnInit {
	private orderId: string;
  public order: any;
  public showSuccess: boolean;

  constructor(
  	private orderService: OrderService,
  	private activatedRoute: ActivatedRoute
 	) {
  	this.orderId = this.activatedRoute.snapshot.params.id;
    this.showSuccess = this.activatedRoute.snapshot.queryParams.success;
 	}

  ngOnInit() {
  	this.orderService.get(this.orderId)
  		.subscribe(order => {
  			this.order = order;
  		});
  }

}
