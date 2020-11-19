import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductViewComponent } from './view/product-view.component';
import { ProductListComponent } from './list/product-list.component';

const childRoutes: Routes = [
	{
    path: '',
    component: ProductListComponent
  },
  {
    path: ':id',
    component: ProductViewComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: childRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
