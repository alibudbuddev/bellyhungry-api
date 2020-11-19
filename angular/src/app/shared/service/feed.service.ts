import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '@core/service/app.service';

@Injectable()
export default class FeedService {
	private endpoint: string;

  constructor(private httpClient: HttpClient, private appService: AppService) {
  	this.endpoint = `${appService.apiUrl}/feed`;
  }

  products():Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/products`);
  }

  getProduct(productId: string):Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/products/${productId}`);
  }
}
