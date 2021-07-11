import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastrService: ToastrService) { 
  }

  setPREF(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  }

  getPREF(key) {
      return JSON.parse(localStorage.getItem(key));
  }

  setPREFString(key, value) {
      localStorage.setItem(key, value);
  }

  getPREFString(key) {
      return localStorage.getItem(key);
  }

  delPREF(key) {
      return localStorage.removeItem(key);
  }

  delAllPREF() {
      return localStorage.clear();
  }

  showSuccess(message) {
    this.toastrService.success(message);
  }

  showError(message) {
    this.toastrService.error(message);
  }

  checkUserLoggedInOrNot() {
    if (this.getPREFString('token')) {
      return true;
    } else {
      return false;
    }
  }
}
