import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { ResisterService } from 'src/app/Service/resister.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent {
    patient:Patient;
     constructor(private resisterService:ResisterService,private router:Router){
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


