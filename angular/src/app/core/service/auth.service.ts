import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	public endpoint: string;
	public user: any;
  
  constructor(private httpClient: HttpClient) {}

  signUp(user: any):Observable<any> {
    let userObj = {user: user};
    return this.httpClient.post<any>(`${this.endpoint}`, userObj);
  }

  signIn(user: any):Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}/login`, user).pipe(
      map(response => {
        localStorage.setItem('access_token', response.access_token);
        return response.user;
      })
    );
  }

  signOut():Observable<boolean> {
    return this.httpClient.delete<any>(`${this.endpoint}/signout`);
  }

}
