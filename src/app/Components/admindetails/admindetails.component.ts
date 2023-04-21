import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { ResisterService } from 'src/app/Service/resister.service';


@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent {
 admin:Admin
 
 email:any =  sessionStorage.getItem('name')
 
 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
  map((result: { matches: any; }) => result.matches),
  shareReplay()
);
  constructor(private adminService:ResisterService,private router:Router,private breakpointObserver: BreakpointObserver){
    console.log("this is Dashboard construyctor");    
    this.admin = new Admin()  
  }


  ngOnInit(){
 // console.log(" outside the contructor of dashboard");
 this.adminService.admindetails(this.email).subscribe(res=>
  {
    console.log(res);
    this.admin = res
  })
  } 
  gotoEditCompoent(email:any){
    this.router.navigate(['admindetails/editadmin',email])
  } 

}
