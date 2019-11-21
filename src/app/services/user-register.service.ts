import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserEntity } from '../user-signup/Models/user-entity';
import { UserResponse } from '../user-signup/Models/user-response';
import { Technology } from '../user-signup/Models/technology';
import { String } from 'typescript-string-operations';


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  params : HttpParams;

  constructor(private http: HttpClient) { }

  registerUser(user : UserEntity): Observable<UserResponse>{
      return this.http.post<UserResponse>(
        'http://localhost:5002/api/user',user);
  }

  getAllTechnologies() : Observable<Technology[]> {
      return this.http.get<Technology[]>(
        'http://localhost:5003/api/technology');
  }

  getTechnologyByName(technologyName : string) : Observable<number> {
    this.params = new HttpParams().set('name', technologyName);
    let url = String.Format(
      'http://localhost:5003/api/technology/GetTechnologyIdFromTechName/{0}',
        technologyName);
    console.log('url:',url);
    return this.http.get<number>(url);
  }
}
