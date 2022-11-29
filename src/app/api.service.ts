import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { admin } from './admin';

@Injectable
({
  providedIn: 'root'
})

export class ApiService
{
  redirectUrl!: string;
  baseUrl:string = "http://localhost/ClubRegisteration/Backend/php";
  
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username: any, password: any)
  {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Comps =>
      {
        this.setToken(Comps[0].staff_name);
        this.getLoggedInName.emit(true);
        return admin;
      }));
  }

  public userregistration(username: any, password: any)
  {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { username, password })
    .pipe(map(admin =>
      {
        return admin;
      }));
  }

  //token
  setToken(token: string)
  {
    localStorage.setItem('token', token);
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  deleteToken()
  {
    localStorage.removeItem('token');
  }
  isLoggedIn()
  {
    const usertoken = this.getToken();
    if (usertoken != null)
    {
      return true
    }
    return false;
  }
}