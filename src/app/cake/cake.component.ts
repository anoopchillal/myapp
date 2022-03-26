import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cake: any

//   cake = {
//     cakename: "Red Velvet",
//     price : "1000",
//     image: "assets/redvelvet.jpg"
// }

// eggless(){
//   console.log("Clicked!!")
// }
constructor(private toastr: ToastrService) {}

showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!');
}

  ngOnInit(): void {
  }

}
