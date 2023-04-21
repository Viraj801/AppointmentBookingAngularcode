import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { AdminService } from 'src/app/Service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resister-doctor',
  templateUrl: './resister-doctor.component.html',
  styleUrls: ['./resister-doctor.component.css']
})
export class ResisterDoctorComponent {

  doctor:Doctor;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private resisterService:AdminService,private router:Router,private breakpointObserver: BreakpointObserver){
   console.log("within in resister");
   this.doctor =new Doctor()
  }    
  ngOnInit(){
    this.resisterdoctor()
  }
resisterdoctor() {


 this.resisterService.ResisterDocotr(this.doctor).subscribe(res=>
  {
    console.log(res);
    if(res){
      console.log("resister success")
      Swal.fire(
        'resister process',
        'Resister Success',
        'success'
      )
      this.router.navigate(['login'])
    }
    else{
      console.log("resister failed");
      Swal.fire(
        'Resister process',
        'Resister Failed',
        'error'
      )       
    }
  })
    
}

}

