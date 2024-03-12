import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginComponent},
  {path:'cms/dashboard',pathMatch:'full',component:DashboardComponent},
  {path:'cms/otp',pathMatch:'full',component:OtpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
