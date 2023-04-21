
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ResisterComponent } from './Components/resister/resister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './Components/nav/nav.component';
import {MatInputModule} from '@angular/material/input';
import { AdmindetailsComponent } from './Components/admindetails/admindetails.component';
import { GetAllDocotorsComponent } from './Doctor/get-all-docotors/get-all-docotors.component';
import { ResisterDoctorComponent } from './Doctor/resister-doctor/resister-doctor.component';
import { DeleteDoctorComponent } from './Doctor/delete-doctor/delete-doctor.component';
import { ListofApointmentsComponent } from './patient/listof-apointments/listof-apointments.component';
import { ReisisterpatientComponent } from './patient/reisisterpatient/reisisterpatient.component';
import { GetallpatientsComponent } from './patient/getallpatients/getallpatients.component';
import { PendingAppointslistsComponent } from './patient/pending-appointslists/pending-appointslists.component';
import { CompleteAppointemntListComponent } from './patient/complete-appointemnt-list/complete-appointemnt-list.component';
import { HeadComponent } from './main/head/head.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { EditadminComponent } from './admin/editadmin/editadmin.component';

@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   ResisterComponent,
   NavComponent,
   AdmindetailsComponent,
   GetAllDocotorsComponent,
   ResisterDoctorComponent,
   DeleteDoctorComponent,
   ListofApointmentsComponent,
   ReisisterpatientComponent,
   GetallpatientsComponent,
   PendingAppointslistsComponent,
   CompleteAppointemntListComponent,
   HeadComponent,
   LogoutComponent,
   EditadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
