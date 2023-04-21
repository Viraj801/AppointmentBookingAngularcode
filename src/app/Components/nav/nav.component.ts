import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResisterComponent } from '../resister/resister.component';
import { LoginComponent } from '../login/login.component';
import { AdmindetailsComponent } from '../admindetails/admindetails.component';
import { GetAllDocotorsComponent } from 'src/app/Doctor/get-all-docotors/get-all-docotors.component';
import { ResisterDoctorComponent } from 'src/app/Doctor/resister-doctor/resister-doctor.component';
import { ReisisterpatientComponent } from 'src/app/patient/reisisterpatient/reisisterpatient.component';
import { ListofApointmentsComponent } from 'src/app/patient/listof-apointments/listof-apointments.component';
import { GetallpatientsComponent } from 'src/app/patient/getallpatients/getallpatients.component';
import { PendingAppointslistsComponent } from 'src/app/patient/pending-appointslists/pending-appointslists.component';
import { CompleteAppointemntListComponent } from 'src/app/patient/complete-appointemnt-list/complete-appointemnt-list.component';
import { LogoutComponent } from '../logout/logout.component';
import { EditadminComponent } from 'src/app/admin/editadmin/editadmin.component';
import { DeleteDoctorComponent } from 'src/app/Doctor/delete-doctor/delete-doctor.component';



const routes: Routes = [

{path:'admindetails',component:AdmindetailsComponent},
{path:'getAllDocotrs',component:GetAllDocotorsComponent},
{path:'resisterDoctor',component:ResisterDoctorComponent},
{path:'resisterDoctor',component:ResisterDoctorComponent},
{path:'resisterpatent',component:ReisisterpatientComponent},
{path:'appointmentlist',component:ListofApointmentsComponent},
{path:'resisterpatient',component:ReisisterpatientComponent},
{path:'getallpatients',component:GetallpatientsComponent},
{path:'pendingappointment',component:PendingAppointslistsComponent},
{path:'completeappointment',component:CompleteAppointemntListComponent},
{path:'logout',component:LogoutComponent},
{path:'editadmindetails',component:EditadminComponent},
{path:'admindetails/editadmin/:email',component:EditadminComponent},
{path:'getalldoctor/deteledoctor/:email',component:DeleteDoctorComponent},
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
