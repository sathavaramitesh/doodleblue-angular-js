import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HelperService } from '../services/helper.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  inboxData: any = [];
  constructor(
    private home: HomeService,
    public helper: HelperService,
  ) {
    this.getInbox();
  }

  ngOnInit(): void {
  }

  getInbox() {
    this.home.inbox().subscribe(
      (res: any) => {
        this.inboxData = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
}
