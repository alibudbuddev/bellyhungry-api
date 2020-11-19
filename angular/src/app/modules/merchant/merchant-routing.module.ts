import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { MerchantOrdersComponent } from './orders/merchant-orders.component';
import { MerchantOrderViewComponent } from './order-view/merchant-order-view.component';

const childRoute: Routes = [
  {
    path: 'orders',
    component: MerchantOrdersComponent
  },
  {
    path: 'orders/:id',
    component: MerchantOrderViewComponent
  },
  {
    path: '**',
    redirectTo: 'orders'
  }
];

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: childRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
