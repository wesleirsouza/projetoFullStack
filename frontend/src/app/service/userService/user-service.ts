import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../interface/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/registration"

  public createUser(user : User){
    return this.http.post<User>(this.apiUrl, user);
  }
  
}
