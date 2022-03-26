import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

let AdminRoutes: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],

  imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
})
export class AdminModule {}
