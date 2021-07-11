import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from '../services/helper.service';
import { ApisService } from '../services/apis.service';
import { HomeService } from '../services/home.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ], providers: [
    HelperService,
    ApisService,
    HomeService
  ]
})
export class LoginModule { }
