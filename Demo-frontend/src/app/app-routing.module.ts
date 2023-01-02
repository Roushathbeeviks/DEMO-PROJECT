import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminLandComponent } from './Admin/admin-land/admin-land.component';
import { AdminSignUpComponent } from './Admin/admin-sign-up/admin-sign-up.component';
import { VoyagePlanComponent } from './Admin/voyage-plan/voyage-plan.component';
import { ForgotpasswordComponent } from './Users/forgotpassword/forgotpassword.component';
import { HeaderComponent } from './Users/header/header.component';
import { LandingPageComponent } from './Users/landing-page/landing-page.component';
import { LoginComponent } from './Users/login/login.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'land',component:LandingPageComponent},
{path:'adminLand',component:AdminLandComponent},
{path:'adminHeader',component:AdminHeaderComponent},
{path:'adminSignUp',component:AdminSignUpComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'voyageplan',component:VoyagePlanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
