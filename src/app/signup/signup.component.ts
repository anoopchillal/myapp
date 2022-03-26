import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
//   signupForm: FormGroup;

//   submitted: any = false;

//   constructor(private formbuilder: FormBuilder) {
//     this.signupForm = this.formbuilder.group({
//       email: ['', [Validators.required, Validators.required]],
//       name:['', [Validators.required, Validators.required]],
//       password:['', [Validators.required, Validators.required]]
//     });
//   }
//   signup() {
//     this.submitted = true;
//     if (this.signupForm.invalid) {
//       return;
//     } else {
//       alert('DO the signup task');
//     }
//   }
//   ngOnInit(): void {}
// }
  signup: any = {};

  register() {
    // this.ngxService.start();
    this.signup = {
      name: this.signup.name,
      email: this.signup.email,
      password: this.signup.password,
    };
    console.log(this.signup);
    this.common.signup(this.signup).subscribe((response: any) => {
      console.log(response);
    });
    // this.ngxService.stop();
  }
  constructor(
    private common: CommonService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01');

    setTimeout(() => {
      this.ngxService.stopLoader('loader-01');
    }, 3000);
  }
}
