import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../services/home.service';
import { ApisService } from '../services/apis.service';
import { HelperService } from '../services/helper.service';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    ApisService,
    HelperService
  ]
})
export class SignUpModule { }
