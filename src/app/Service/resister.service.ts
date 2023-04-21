import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root'
})

export class ResisterService {
  editadmin(admin: Admin):Observable<boolean>{
    return this.httpclient.post<boolean>('https://localhost:7294/api/Admin/UpdataAdminDetails',admin)
  }
  // updateAdminDetails(admin: Admin):Observable<boolean>{
    // return this.httpclient.post<boolean>('https://localhost:7294/api/Admin/UpdataAdminDetails',admin)
  // }
  admindetails(email:string):Observable<Admin>{
    return this.httpclient.get<Admin>('https://localhost:7294/api/Admin/AdminDetails?email='+email);
  }
  constructor(private httpclient:HttpClient) { }
 
  
  LoginAdmin(loginInfo: LoginInfo):Observable<Admin>{
  
    return this.httpclient.post<Admin>('https://localhost:7294/api/Admin/AdminLogin',loginInfo);
  }

  ResisterPatient(patient:Patient):Observable<boolean>{
    return this.httpclient.post<boolean>('https://localhost:7294/api/Patient/ResistorPatient',patient); 
  }
  // LoginPatient(loginInfo:LoginInfo):Observable<Admin>{
    // return this.httpclient.post<Admin>('https://localhost:7294/api/Admin/AdminLogin',loginInfo);
  // }
}
