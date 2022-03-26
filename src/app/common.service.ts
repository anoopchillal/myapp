import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) {

  }
  getCakes(){
    let url= "https://apifromashu.herokuapp.com/api/allcakes"
    return this.http.get(url)
  }

  signup(body:any){
    let url = "https://apifromashu.herokuapp.com/api/register"
    return this.http.post(url, body)
  }

  login(body:any){
    let url = "https://apifromashu.herokuapp.com/api/login"
    return this.http.post(url, body)
  }
  // addToCart(payload) {
  //   return this.http.post(`https://apifromashu.herokuapp.com/api//cart`, payload);
  // }
  // getCartItems() {
  //   return this.http.get(`https://apifromashu.herokuapp.com/api//cart`);
  // }
  // increaseQty(payload) {
  //   return this.http.post(`https://apifromashu.herokuapp.com/api//cart`, payload);
  // }
  // emptyCart() {
  //   return this.http.delete(`https://apifromashu.herokuapp.com/api//cart/empty-cart`);
  // }
}
