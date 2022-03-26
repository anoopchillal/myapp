import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css'],
})
export class CakedetailsComponent implements OnInit {
  cakeid: any;
  cakedetails: any = {};
  constructor(private http: HttpClient, private route: ActivatedRoute, private toastr:ToastrService) {
    this.cakeid = this.route.snapshot.params['cakeid'];

    var url = 'https://apifromashu.herokuapp.com/api/cake/' + this.cakeid;

    this.http.get(url).subscribe(
      (response: any) => {
        console.log('Response from cake details api', response);

        this.cakedetails = response.data;
      },
      (error) => {
        console.log('Error from cake details api', error);
      }
    );
  }
  addToCart() {
    let headers = new HttpHeaders();
    headers = headers.append('authtoken', localStorage['myapp-token']);
    var url = 'https://apifromashu.herokuapp.com/api/addcaketocart';
    var body = {
      cakeid: this.cakedetails[0].cakeid,
      name: this.cakedetails[0].name,
      price: this.cakedetails[0].price,
      image: this.cakedetails[0].image,
      weight: this.cakedetails[0].weight,
    };
    console.log(localStorage.getItem('myapp-token'));
    console.log(headers);

    this.http.post(url, body, {
      // 3rd parameter is known as options paramter in options above is the syntax to send custom headers
      headers: headers,
    }).subscribe((response:any)=>{
      console.log(response.data)
      this.toastr.success(response.message)
    });
  }

  ngOnInit(): void {}
}
