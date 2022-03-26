import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxUiLoaderModule } from "ngx-ui-loader";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LOGINComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { DiscountPipe } from './discount.pipe';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { HighlightDirective } from './highlight.directive';
import { AuthinterceptorService } from './authinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CakeComponent,
    CakelistComponent,
    AddcakeComponent,
    DatatableComponent,
    LOGINComponent,
    SignupComponent,
    CakedetailsComponent,
    SearchComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    SummaryComponent,
    PaymentComponent,
    DiscountPipe,
    CartitemsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[

    {provide:HTTP_INTERCEPTORS, useClass:AuthinterceptorService , multi:true}

 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
