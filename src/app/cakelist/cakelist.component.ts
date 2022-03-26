import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  object=[{
    name:"White Forest",
    price:800,
    imgvalue:"/assets/Whiteforestcake.jpg",
    eggless:true
  },{
    name:"Triple Chocolate",
    price:1200,
    imgvalue:"/assets/tripleChococake.jpg",
    eggless:false
  },{
    name:"Honey Cake",
    price:600,
    imgvalue:"/assets/honeycake.jpg",
    eggless:false
  },{
    name:"Rainbow Cake",
    price:1300,
    imgvalue:"/assets/rainbow_cake.jpg",
    eggless:true
  },{
    name:"Butter Scotch",
    price:1000,
    imgvalue:"/assets/butterscotchcake.jpg",
    eggless:false
  },{
    name:"Berry Special",
    price:1100,
    imgvalue:"/assets/berrycake.jpg",
    eggless:false
  }]
  cakes = []

  constructor(private common : CommonService) {

    this.common.getCakes().subscribe((response:any) =>{
      console.log("Response from all cakes api", response)
      this.cakes = response.data
    },(error)=>{
      console.log("Error from all cakes api", error)
    })

  }

  ngOnInit(): void {
  }

}
