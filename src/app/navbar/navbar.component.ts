import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectname = "ABC's Cake Gallery"  // property
  title = "ABC's Cafe"
  anoop = "time"
  isloggedin : any

  searchtext:any ="Search Cakes"

  constructor(private router: Router) { }

  search(event:any){
    if(this.searchtext){
      this.router.navigate(['/search'], {queryParams:{q:this.searchtext}})
    }
  }

  checking(){
    if(!localStorage.token){
      this.isloggedin =false;
      console.log("logged in")
    }
    else{
      this.isloggedin=true
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate
  }
  ngOnInit(): void {
  }

}
