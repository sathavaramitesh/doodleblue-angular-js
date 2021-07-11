import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  token: any;
  constructor(public apiService: ApisService, private helper: HelperService) { }

  userSignup(data) {
    return this.apiService.postWithoutHeader('/auth/sign-up', data);
  }

  userLogin(data) {
    return this.apiService.postWithoutHeader('/auth/login', data);
  }

  compose(data) {
    return this.apiService.postWithHeader('/users/send-mail', data, this.helper.getPREF('token'));
  }

  inbox() {
    return this.apiService.getWithHeader('/users/inbox', this.helper.getPREF('token'));
  }

  sent() {
    return this.apiService.getWithHeader('/users/sent-mail', this.helper.getPREF('token'));
  }

  viewMail(mailId) {
    return this.apiService.getWithHeader(`/users/view/${mailId}`, this.helper.getPREF('token'));
  }

  getAccountDetail() {
    return this.apiService.getWithHeader(`/users/account-list`, this.helper.getPREF('token'));
  }
}
