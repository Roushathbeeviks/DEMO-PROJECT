import { NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./Users/login/login.component"
import { LandingPageComponent } from './Users/landing-page/landing-page.component';
import { HeaderComponent } from './Users/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
//import { AdminComponent } from './admin/admin/admin.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import{MatTableModule} from "@angular/material/table"
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

import { ForgotpasswordComponent } from './Users/forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './Users/editprofile/editprofile.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { VoyagePlanComponent } from './Admin/voyage-plan/voyage-plan.component';
import {MatStepperModule} from '@angular/material/stepper';
import { VoyageFormsComponent } from './Admin/voyage-forms/voyage-forms.component';
import { VesselListComponent } from './Vessel/vessel-list/vessel-list.component';
import { AssetListComponent } from './Admin/asset-list/asset-list.component';
import { VesselHeaderComponent } from './Vessel/vessel-header/vessel-header.component';
import { VesselLandComponent } from './Vessel/vessel-land/vessel-land.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { VesselMappingComponent } from './Vessel/vessel-mapping/vessel-mapping.component';


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
    VoyagePlanComponent,
    VoyageFormsComponent,
    VesselListComponent,
    AssetListComponent,
    VesselHeaderComponent,
    VesselLandComponent,
    UserListComponent,
    VesselMappingComponent,
   
  
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
    MatSortModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
