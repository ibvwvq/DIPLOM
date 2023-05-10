import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit{
  activeItemIndex = 0;
  constructor(public apiService:ApiService) {
  }
  name = this.apiService.CURRENT_USER.fullName;
  email = this.apiService.CURRENT_USER.email;
  id = this.apiService.CURRENT_USER.idContactInformation;
  role = '';

  ngOnInit() {
    if(this.apiService.CURRENT_ROLE == 3){
      this.role = 'student';
    }
    else if(this.apiService.CURRENT_ROLE == 2){
      this.role = 'teacher';
    }
    else if(this.apiService.CURRENT_ROLE == 1){
      this.role = 'admin';
    }
  }
}
