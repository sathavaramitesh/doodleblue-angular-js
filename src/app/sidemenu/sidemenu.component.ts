import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HelperService } from '../services/helper.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  viewId: any;
  composeForm: FormGroup;
  viewObject: any = {};
  modalRef: BsModalRef;
  submitted = false;

  constructor(
    private home: HomeService,
    private modalService: BsModalService,
    public helper: HelperService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.composeForm = this.fb.group({
      to: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>, id?, index?) {
    this.viewId = id ? id : null;
    if (this.viewId) {
      this.home.viewMail(this.viewId).subscribe(
        (res: any) => {
          this.viewObject = res.data;
        },
        (err) => {
          console.log(err);
        });
      this.composeForm.get('to').setValue(this.viewObject.email);
      this.composeForm.get('subject').setValue(this.viewObject.subject);
      this.composeForm.get('text').setValue(this.viewObject.text);
    } else {
      this.composeForm.get('to').setValue("");
      this.composeForm.get('subject').setValue("");
      this.composeForm.get('text').setValue("");
    }
    this.modalRef = this.modalService.show(template);
  }
  closeModel() {
    this.viewId = null;
    this.modalRef.hide();
  }

  get l() {
    return this.composeForm.controls;
  }

  logout() {
    var accountData = this.helper.getPREF('loginUsers');
    if(accountData.length == 1) {
      this.helper.delAllPREF();
      this.router.navigate(['/login']);
    } else {
      var userData = this.helper.getPREF('userData');
      var currentUserIndex = accountData.findIndex((user) => user.userId == userData.userId);
      console.log("currentUserIndex", currentUserIndex);
      
      if (currentUserIndex > -1) {
        accountData.splice(currentUserIndex, 1);
        this.helper.showSuccess('Logout Successfully.');
        this.modalRef.hide();
      }
      this.helper.setPREF('loginUsers', accountData);
      this.helper.setPREF('token', accountData[0].token);
      this.helper.setPREF('userData', accountData[0]);
      location.reload();
    } 
    
  }

  btnClick(link) {
    this.router.navigateByUrl(link);
  }

  sendMail() {
    this.submitted = true;
    if (this.composeForm.invalid) {
      return;
    }
    const data: any = {};
    data.to = [this.composeForm.value.to];
    data.subject = this.composeForm.value.subject;
    data.text = this.composeForm.value.text;
    this.home.compose(data).subscribe(
      (res) => {
        // this.getInbox();
        this.helper.showSuccess('Mail Send Successfully.');
        this.modalRef.hide();
      },
      (err) => {
        this.helper.showError(err.error.error)
        this.modalRef.hide();
      }
    );
  }

}
