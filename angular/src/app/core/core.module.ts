import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule { }
