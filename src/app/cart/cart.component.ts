import { ToastrService } from 'ngx-toastr';
import { CommonService } from './../common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterEvent, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;

  constructor(private http: HttpClient,private toastr: ToastrService) {
    var headers = new HttpHeaders();
    headers = headers.append('authtoken', localStorage['myapp-token']);

    this.http
    .post('https://apifromashu.herokuapp.com/api/cakecart', {
      headers: headers,
    })
      .subscribe((response: any) => {
        if(response.data.length === 0){
            this.toastr.success(response.message);
        } else {
          this.cart = response.data;
        }
        console.log(response);
        this.cart = response.data;
      });
  }
  ngOnInit(): void {}
  add() {}
}
