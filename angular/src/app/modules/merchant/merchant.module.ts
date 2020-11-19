import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { MerchantOrdersComponent } from './orders/merchant-orders.component';
import { MerchantOrderViewComponent } from './order-view/merchant-order-view.component';

@NgModule({
  declarations: [MerchantComponent, MerchantOrdersComponent, MerchantOrderViewComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }
