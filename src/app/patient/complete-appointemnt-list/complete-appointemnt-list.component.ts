import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Appointments } from 'src/app/models/appointments';
import { Patient } from 'src/app/models/patient';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-complete-appointemnt-list',
  templateUrl: './complete-appointemnt-list.component.html',
  styleUrls: ['./complete-appointemnt-list.component.css']
})
export class CompleteAppointemntListComponent {

  Appointmentlist?:Appointments[]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private adminService:AdminService,private router:Router,private breakpointObserver: BreakpointObserver){
    console.log("this is Dashboard construyctor");   
  }
  ngOnInit(){
 this.adminService.competedAppointment().subscribe(res=>
  {
  console.log(res);
  this.Appointmentlist=res
  })
  }  
}
