import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentRoutingModule } from './sent-routing.module';
import { SentComponent } from './sent.component';
import { HomeService } from '../services/home.service';
import { ApisService } from '../services/apis.service';
import { HelperService } from '../services/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { SidemenuModule } from '../sidemenu/sidemenu.module';

@NgModule({
  declarations: [SentComponent],
  imports: [
    CommonModule,
    SentRoutingModule,
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
export class SentModule { }
