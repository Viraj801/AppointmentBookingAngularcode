import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Doctor } from 'src/app/models/doctor';
import { AdminService } from 'src/app/Service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent {

  doctor:Doctor
  email:any
  constructor(private adminSservice:AdminService,private router:Router,private activatedRoute:ActivatedRoute){
   this.doctor = new Doctor()
  }
  ngOnInit():void{
    this.email = this.activatedRoute.snapshot.paramMap.get('email')
    this.deteteDoctor(this.email)
  }
  deteteDoctor(email: any) {
    this.adminSservice.DeleteDoctor(email).subscribe(res=>{
      console.log(res);
      //this.router.navigate(['nav']) 
      if(res){
        console.log("Delete Doctor success");  
        Swal.fire(
          'Delete Doctor process',
          'Delete Doctor Success',
          'success'
        )
        this.router.navigate(['login'])
      }
      else{
        console.log("Delete Doctor failed"); 
        Swal.fire(
          'Delete Doctor process',
          'Delete Doctor Failed',
          'error'
        )       
      }
    })
  } 
  
}
