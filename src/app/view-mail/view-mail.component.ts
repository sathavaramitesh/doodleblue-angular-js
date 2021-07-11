import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.scss']
})
export class ViewMailComponent implements OnInit {
  public id: number;
  mailDetail: any = {};
  userData;
  fullName;
  email;
  constructor(
    public helper: HelperService,
    private router: Router,
    private route: ActivatedRoute,
    private home: HomeService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMailDetail(this.id);
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  getMailDetail(id){
    this.home.viewMail(id).subscribe(
      (res: any) => {
        this.mailDetail = res.data;
        if(this.userData.userId == this.mailDetail.senderId){
          this.fullName = this.mailDetail.receiverFirstName + ' ' + this.mailDetail.receiverLastName;
          this.email = this.mailDetail.receiverEmail;
        } else {
          this.fullName = this.mailDetail.senderFirstName + ' ' + this.mailDetail.senderLastName;
          this.email = this.mailDetail.senderEmail;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    this.helper.delAllPREF();
    this.router.navigate(['/login']);
  }

}
