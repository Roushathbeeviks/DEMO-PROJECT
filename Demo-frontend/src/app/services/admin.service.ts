import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  SignupUser(data: any) {
    return this.http.post(this.URL + '/user/signup', data);
  }

  Login(data:any){
    return this.http.post(this.URL +'/user/login',data);
  }

  ForgotPassword(data:any)
  {
    return this.http.post(this.URL+'/user/forgotpassword',data);
  }
  AllUsers()
  {
    return this.http.get(this.URL+'/user/getallusers')
  }
}
