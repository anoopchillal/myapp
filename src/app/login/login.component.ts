import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {
  user:any ={ }
  constructor(private common: CommonService,private loader:NgxUiLoaderService, private router:Router) { }

  login(){
    this.common.login(this.user).subscribe((response:any)=>{
    console.log("response from api" , response)
    if (response.token){
      localStorage["token"] =response.token
      this.router.navigate(["/"])
    }
    else{
      alert("Invalid credentials!")
    }
    })
 }
  ngOnInit(): void {
  }

}
