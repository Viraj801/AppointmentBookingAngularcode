import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { ResisterService } from 'src/app/Service/resister.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reisisterpatient',
  templateUrl: './reisisterpatient.component.html',
  styleUrls: ['./reisisterpatient.component.css']
})
export class ReisisterpatientComponent {

  patient:Patient;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private resisterService:ResisterService,private router:Router,private breakpointObserver: BreakpointObserver){
   console.log("within in resister");
   this.patient = new Patient()
  }    
  ngOnInit():void{
    this.resisterPatient()
  }
resisterPatient() {
//  this.patient.patientname = "viraj"
// this.patient.gender = "male"
//  this.patient.dateofbirth = "26/12/2000"
//  this.patient.contactnumber = "8878965616"
//  this.patient.patientemailid  = "viraj@123.com"
//  this.patient.password =  "raj@123"
  console.log(this.patient);
 this.resisterService.ResisterPatient(this.patient).subscribe(res=>{
   if(res){

     console.log("resister success");  
     Swal.fire(
       'resister process',
       'Resister Success',
       'success'
     )
     this.router.navigate(['/login'])
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




