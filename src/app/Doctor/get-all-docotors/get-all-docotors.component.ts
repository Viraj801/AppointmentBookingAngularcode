import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-get-all-docotors',
  templateUrl: './get-all-docotors.component.html',
  styleUrls: ['./get-all-docotors.component.css']
})
export class GetAllDocotorsComponent {

  doctors?:Doctor[]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private adminService:AdminService,private router:Router,private breakpointObserver: BreakpointObserver){
    console.log("this is Dashboard construyctor");  
     
  }
 status:number = 0;
 ChangeCom(i:number){
  this.status=i;
  console.log(i);  
}
  ngOnInit(){
 // console.log(" outside the contructor of dashboard");
 this.adminService.getalldocotors().subscribe(res=>
  {
    console.log(res);
  this.doctors=res
  })
  }  
  deletedoctor(email:any){
    this.router.navigate(['getalldoctor/deteledoctor',email])
  }
}


