import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment/environment'

@Injectable()
export class MerchantService {
	private endpoint = `${environment.apiUrl}/merchant`;
	public user: undefined | object | boolean;
  
  constructor(private httpClient: HttpClient) { }

  orders():Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/orders`);
  }

  order(orderId: string):Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/orders/${orderId}`);
  }

}
