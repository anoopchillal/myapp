import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnoopService {
  sortAsscending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price-obj2.price
    })
    return data
  }
  sortDescending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price-obj1.price
    })
    return data
  }
  filtermethod(data:any){
    data.sort((obj:any)=>{
      return obj.eggless
    })
    return data
  }
  constructor() { }
}
