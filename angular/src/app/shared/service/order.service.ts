import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment/environment'

interface CreateOrderInterface {
	items: {product: string, merchant: string, price: number, qty: number }[];
	customerDetails: {name: string, shippingAddress: string, contactNo: string}
}

@Injectable()
export class OrderService {
	private endpoint = `${environment.apiUrl}/orders`;
	public user: undefined | object | boolean;
  
  constructor(private httpClient: HttpClient) { }

  create(order: CreateOrderInterface):Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}`, order);
  }

  get(id: string):Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/${id}`);
  }

}
