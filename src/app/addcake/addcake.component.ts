import { AnoopService } from './../anoop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {

  name:any
  price:any
  image:any
  eggless:any
  cakes: any =[]
  sortasc(){
    this.anoop.sortAsscending(this.cakes)
  }
  sortdsc(){
    this.anoop.sortDescending(this.cakes)
  }
  applyfilter(){
    this.anoop.filtermethod(this.cakes)
  }
  constructor(private anoop: AnoopService){}
  
  addCake(){
    var cakedetails = {
      name: this.name,
      price: this.price,
      image: this.image,
      eggless: this.eggless
    }
    this.cakes.push(cakedetails)
  }

  ngOnInit(): void {
  }

}

