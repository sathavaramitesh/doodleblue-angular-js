import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeService } from '../services/home.service';
import { ApisService } from '../services/apis.service';
import { HelperService } from '../services/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewMailRoutingModule } from './view-mail-routing.module';
import { HeaderModule } from '../header/header.module';
import { SidemenuModule } from '../sidemenu/sidemenu.module';
import { ViewMailComponent } from './view-mail.component';

@NgModule({
  declarations: [ViewMailComponent],
  imports: [
    CommonModule,
    ViewMailRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HeaderModule,
    SidemenuModule
  ], providers: [
    HomeService,
    ApisService,
    HelperService
  ]
})
export class ViewMailModule { }

