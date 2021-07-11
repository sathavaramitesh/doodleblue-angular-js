import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../constant/custmValidator';
import { HelperService } from '../services/helper.service';
import { HomeService } from '../services/home.service';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  modalRef: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private home: HomeService,
    private helper: HelperService,
    private router: Router
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CustomValidators.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(CustomValidators.PASSWORD)]]
    });
   }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    } else {
      const formValue: any = this.loginForm.value;
      const data: any = {
        email: formValue.email,
        password: formValue.password
      };
      this.home.userLogin(data).subscribe((res: any) => {
        var loginUsers = this.helper.getPREF('loginUsers');
        loginUsers = loginUsers || [];
        loginUsers.push(res.data);

        this.helper.setPREF('loginUsers', loginUsers);
        this.helper.setPREF('token', res.data.token);
        this.helper.setPREF('userData', res.data);
        this.helper.showSuccess('Login successfully');
        this.router.navigate(['/inbox']);
      }, (err) => {
        this.helper.showError(err.error.error)
      }); 
    }
  }

  get l() {
    return this.loginForm.controls;
  }

}
