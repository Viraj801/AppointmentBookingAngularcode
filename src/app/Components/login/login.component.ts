import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/models/login-info';
import { ResisterService } from 'src/app/Service/resister.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInfo : LoginInfo
  loginForm:FormGroup<any>

  constructor(private resisterservice: ResisterService ,private formbuilder:FormBuilder,private router:Router) {
    this.loginInfo = new LoginInfo();
   // this.loginForm= FormGroup({})
    this.loginForm= formbuilder.group({
       Email:["",Validators.compose([Validators.required,Validators.minLength(6)])],
       Password:["",Validators.compose([Validators.required,Validators.minLength(4)])]    
   })
  
  }
  ngOnInit(){
   //this.loginpatient()

   }
loginAdmin(loginForm:FormGroup) {
  // this.loginInfo.Email="viraj@1234.com"
//  this.loginInfo.Password="1234"
 this.loginInfo=loginForm.value
  // debugger;
    this.resisterservice.LoginAdmin(this.loginInfo).subscribe(res => {
      var adminemail = res.email
    
      localStorage.setItem('key',adminemail)
      console.log(res);
      sessionStorage.setItem('name',adminemail);
     let adminobj =  JSON.stringify(res)
      sessionStorage.setItem('adminobj',adminobj)
      this.router.navigate(['nav'])
      if(res!=null) {
        console.log(res);
        Swal.fire(
          'Login Process',
          'Login Succuss',
          'success'
        )
      this.router.navigate(['/nav'])
      }
      else {
        console.log("Login failed");
        Swal.fire(
          'Login process',
          'Login Failed',
          'error'
        )
      }
    })

  }
  gotoreisiter(){
    this.router.navigate(['/login/gotoreisiter'])
  }

}
