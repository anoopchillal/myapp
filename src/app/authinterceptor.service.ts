import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){

    if(req.url.includes("cart") || req.url.includes("order")){
        if (localStorage["token"]){
          var req = req.clone({
            headers: req.headers.set("authtoken", localStorage["token"])
          })
        }
    }
    return next.handle(req)
  }
}
