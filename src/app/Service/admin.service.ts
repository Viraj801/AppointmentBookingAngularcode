import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from '../models/appointments';
import { Doctor } from '../models/doctor';

import { Patient } from '../models/patient';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  DeleteDoctor(email: any) {
    return this.httpclient.delete<boolean>('https://localhost:7294/api/Admin/DeleteDoctor?email='+email)
  }
  competedAppointment():Observable<Appointments[]> {
    return this.httpclient.get<Appointments[]>('')
  }
  pendingappointmentList():Observable<Appointments[]> {
    return this.httpclient.get<Appointments[]>('https://localhost:7294/api/Admin/GetPendingAppointments')
  }
  patientsList():Observable<Patient[]> {
    return this.httpclient.get<Patient[]>('https://localhost:7294/api/Patient/GetAllPatient')
  }
  appointmentList():Observable<Appointments[]> {
    return this.httpclient.get<Appointments[]>('https://localhost:7294/api/Admin/GetAllAppointmentsList')
  }

  constructor(private httpclient:HttpClient) { }
  getalldocotors():Observable<Doctor[]>{
    return this.httpclient.get<Doctor[]>('https://localhost:7294/api/Admin/GetAllDoctors');  
  }
  ResisterDocotr(doctor:Doctor) {
    return this.httpclient.post<boolean>('https://localhost:7294/api/Admin/ResistorDoctor',doctor)
  }
  editDoctor(doctor:Doctor){
    return this.httpclient.post<boolean>('https://localhost:7294/api/Admin/UpdataAdminDetails',doctor)
  }
  
}
