import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HelperService } from '../services/helper.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  sentData: any = [];
  submitted = false;
  composeForm: FormGroup;
  modalRef: BsModalRef;
  viewId: any;
  viewObject: any = {};
  constructor(
    private home: HomeService,
    private modalService: BsModalService,
    public helper: HelperService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.getInbox();
  }

  ngOnInit(): void {
  }

  getInbox() {
    this.home.sent().subscribe(
      (res: any) => {
        this.sentData = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
