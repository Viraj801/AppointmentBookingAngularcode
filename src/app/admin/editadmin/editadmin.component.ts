import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { ResisterService } from 'src/app/Service/resister.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent {
  admin:Admin
  admin1:Admin
  email:any =  sessionStorage.getItem('name')
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map((result: { matches: any; }) => result.matches),
    shareReplay()
  );
  constructor(private adminService:ResisterService,private router:Router,private activatedRoute:ActivatedRoute,private breakpointObserver: BreakpointObserver){
this.admin=new Admin()
this.admin1=new Admin()
  }
  ngOnInit(){
    // console.log(" outside the contructor of dashboard");
    this.adminService.admindetails(this.email).subscribe(res=>
     {
       console.log(res);
       this.admin = res
     })
     } 
 
editadmin(){
    this.adminService.editadmin(this.admin).subscribe(res=>{
      console.log(res);
      if(res!=null){
        console.log(res);
        Swal.fire(
          'Update Process',
          'Update Succuss',
          'success'
        )
      this.router.navigate([''])
         
      }
    })
  }
}



