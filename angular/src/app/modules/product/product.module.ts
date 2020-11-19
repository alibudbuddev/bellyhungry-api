import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductTileComponent } from './tile/product-tile/product-tile.component';
import { ProductViewComponent } from './view/product-view.component';
import { ProductListComponent } from './list/product-list.component';


@NgModule({
  declarations: [ProductComponent, ProductTileComponent, ProductViewComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
