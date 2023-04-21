import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-getallpatients',
  templateUrl: './getallpatients.component.html',
  styleUrls: ['./getallpatients.component.css']
})
export class GetallpatientsComponent {
  patients?:Patient[]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private adminService:AdminService,private router:Router,private breakpointObserver: BreakpointObserver){
    console.log("this is Dashboard construyctor");   
  }
  ngOnInit(){
 this.adminService.patientsList().subscribe(res=>
  {
  console.log(res);
  this.patients=res
  })
  } 

}
