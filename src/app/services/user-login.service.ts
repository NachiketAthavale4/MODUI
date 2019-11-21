import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserCredentials } from '../user-login/Models/user-credentials';
import { AuthenticationResponse } from '../user-login/Models/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  loginUser(userCredentials: UserCredentials) : Observable<AuthenticationResponse> {
      return this.http.post<AuthenticationResponse>(
        'http://localhost:5001/api/authentication',userCredentials);
  }

  logOutUser(){
    localStorage.clear();
  }

}
