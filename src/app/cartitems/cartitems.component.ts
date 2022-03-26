import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
  @Input() cake:any;

  incrementQty(){
    this.cake.quantity +=1;
    let headers = new HttpHeaders();
    headers = headers.append('authtoken', localStorage['myapp-token']);
    var url = 'https://apifromashu.herokuapp.com/api/addcaketocart'
    var body = {
      cakeid: this.cake.cakeid,
      name: this.cake.name,
      price: this.cake.price,
      image: this.cake.image,
      weight: this.cake.weight
    };
    this.http.post(url, body, {headers: headers}).subscribe((response:any) =>{
      console.log(response.data);
    });
  }
  decrementQty(){
    this.cake.quantity -= 1;
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
