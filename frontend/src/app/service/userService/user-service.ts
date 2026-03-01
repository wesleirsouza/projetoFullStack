import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../interface/user/user';
import { LoginInterface } from '../../interface/user/loginInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/user"
  loginComfirm: any;

  public createUser(user : User){
    return this.http.post<User>(this.apiUrl + '/registration', user);
  }

  loginConfirm(login: LoginInterface){
  return this.http.post(
    this.apiUrl + '/login',
    login,
    { responseType: 'text' }
  );
}
}