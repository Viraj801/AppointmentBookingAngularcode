import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditadminComponent } from './admin/editadmin/editadmin.component';
import { AdmindetailsComponent } from './Components/admindetails/admindetails.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { NavComponent } from './Components/nav/nav.component';
import { ResisterComponent } from './Components/resister/resister.component';
import { DeleteDoctorComponent } from './Doctor/delete-doctor/delete-doctor.component';
import { GetAllDocotorsComponent } from './Doctor/get-all-docotors/get-all-docotors.component';
import { ResisterDoctorComponent } from './Doctor/resister-doctor/resister-doctor.component';
import { HeadComponent } from './main/head/head.component';
import { CompleteAppointemntListComponent } from './patient/complete-appointemnt-list/complete-appointemnt-list.component';
import { GetallpatientsComponent } from './patient/getallpatients/getallpatients.component';
import { ListofApointmentsComponent } from './patient/listof-apointments/listof-apointments.component';
import { PendingAppointslistsComponent } from './patient/pending-appointslists/pending-appointslists.component';
import { ReisisterpatientComponent } from './patient/reisisterpatient/reisisterpatient.component';

const routes: Routes = [
  {path:'resister',component:ResisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admindetails',component:AdmindetailsComponent},
  {path:'getAllDocotrs',component:GetAllDocotorsComponent},
  {path:'resisterDoctor',component:ResisterDoctorComponent},
 // {path:'resisterDoctor',component:ResisterDoctorComponent},
  {path:'resisterpatent',component:ReisisterpatientComponent},
  {path:'appointmentlist',component:ListofApointmentsComponent},
  {path:'nav',component:NavComponent},
  {path:'resisterpatient',component:ReisisterpatientComponent},
  {path:'getallpatients',component:GetallpatientsComponent},
  {path:'pendingappointment',component:PendingAppointslistsComponent},
  {path:'completeappointment',component:CompleteAppointemntListComponent},
  {path:'logout',component:LogoutComponent},
  {path:'editadmindetails',component:EditadminComponent},
  {path:'admindetails/editadmin/:email',component:EditadminComponent},
  {path:'getalldoctor/deteledoctor/:email',component:DeleteDoctorComponent},
  {path:'head/reisiter',component:ResisterComponent},
  {path:'head/login',component:LoginComponent},
  {path:'login/gotoreisiter',component:ResisterComponent},
  {path:'',component:HeadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
