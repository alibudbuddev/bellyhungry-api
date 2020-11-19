import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutDeliveryDetailsComponent } from './delivery-details/checkout-delivery-details.component';
import { CheckoutSummaryComponent } from './summary/checkout-summary.component';
import { OrderTrackComponent } from './track/order-track.component';

const childRoutes: Routes = [
	{
    path: 'checkout',
    component: CheckoutDeliveryDetailsComponent
  },
  {
    path: 'summary',
    component: CheckoutSummaryComponent
  },
  {
    path: 'track/:id',
    component: OrderTrackComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: childRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
