import { GuardService } from './guard.service';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { LOGINComponent } from './login/login.component';
import { CakeComponent } from './cake/cake.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'login', component:LOGINComponent},
  {path:'cake', component:CakeComponent},
  {path:'cakelist', component:CakelistComponent},
  {path:'signup', component:SignupComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'details/:x',component:CakedetailsComponent},
  {path:'search' , component:SearchComponent},
  {path:'addcake' , component:AddcakeComponent},
  {path:'cart' , canActivate:[GuardService], component:CartComponent},
  {path:'home', component:HomeComponent},
  {path:'cartitems', component:CartitemsComponent},
  {path:'checkout' , canActivate:[GuardService], component:CheckoutComponent, children:[
    {path:'summary' , component:SummaryComponent},
    {path:'payment' , component:PaymentComponent},
    {path:'address' , component:AddressComponent}
  ]},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
