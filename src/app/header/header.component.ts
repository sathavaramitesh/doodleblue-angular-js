import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  accountData: any = [];
  selectedUser: number;
  modalRef: BsModalRef;
  constructor(
    public helper: HelperService,
    private home: HomeService,
    private router: Router,
  ) { 
    this.getAccount();
  }

  ngOnInit(): void {
    this.selectedUser = this.helper.getPREF('userData').userId;
  }

  getAccount(){
    
    this.accountData = this.helper.getPREF('loginUsers');
    this.accountData = this.accountData || [];
    this.accountData.push({
      'firstName': 'Add another account',
      'userId': 'new'
    }, {
      'firstName': 'Sign out of all accounts',
      'userId': 'logout'
    })
  }

  onChangeUser(id) {
    if(id == 'new') {
      this.router.navigate(['/login']);
    } else if(id == 'logout') {
      this.helper.delAllPREF();
      this.router.navigate(['/login']);
    } else {
      var result = this.accountData.find((user) => user.userId == id);
      this.helper.setPREF('token', result.token);
      this.helper.setPREF('userData', result);
      this.selectedUser = result.userId;
      this.helper.showSuccess(`Welcome ${result.firstName} ${result.lastName}`);
      // this.modalRef.hide();
      location.reload();
    }
  }
}
