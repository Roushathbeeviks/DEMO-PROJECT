import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./Users/login/login.component"
import { LandingPageComponent } from './Users/landing-page/landing-page.component';
import { HeaderComponent } from './Users/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AdminSignUpComponent } from './Admin/admin-sign-up/admin-sign-up.component';
//import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
//import { LandComponent } from './Admin/admin/land/land.component';
import { AdminLandComponent } from './Admin/admin-land/admin-land.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatRadioModule} from '@angular/material/radio';
import { ForgotpasswordComponent } from './Users/forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';

import {MatDialogModule} from '@angular/material/dialog';
import{MatTableModule} from "@angular/material/table"
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { EditprofileComponent } from './Users/editprofile/editprofile.component';

import {MatButtonModule} from '@angular/material/button';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    //AdminComponent,
    AdminSignUpComponent,
    //AdminhomeComponent,
    AdminHomeComponent,
    //LandComponent,
    AdminLandComponent,
    AdminHeaderComponent,
    ForgotpasswordComponent,
    LogoutComponent,
    EditprofileComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
