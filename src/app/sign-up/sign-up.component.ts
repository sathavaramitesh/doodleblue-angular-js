import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../constant/custmValidator';
import { HelperService } from '../services/helper.service';
import { HomeService } from '../services/home.service';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder, 
    private home: HomeService,
    private helper: HelperService,
    private router: Router,
    private socialAuthService: SocialAuthService
    ) { 
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(CustomValidators.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(CustomValidators.PASSWORD)]]
    });
  }

  submit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return ;
    } else {
      const formValues: any = this.signupForm.value;
      const userData: any = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        password: formValues.password
      };
      this.home.userSignup(userData).subscribe((res: any) => {
        this.helper.showSuccess('Signup Successfully.');
        this.router.navigate(['/login']);
      }, err => {
        this.helper.showError(err.error.error);
      });
    }
  }

  get s() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
  }

}
