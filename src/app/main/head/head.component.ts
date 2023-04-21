import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  status:number=0;
  constructor(private router:Router){
  }
  ngOnInit():void{}
  ChangeCom(i:number){
    this.status=i;
    console.log(i);  
  }
  gotologin(){
    this.router.navigate(['head/login'])
  }
  gotoreisiter(){
    this.router.navigate(['head/reisiter'])
  }
}