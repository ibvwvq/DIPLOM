import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent{
  activeItemIndex = 0;
  constructor(public apiService:ApiService) {
  }
  name = this.apiService.CURRENT_USER.fullName;
  email = this.apiService.CURRENT_USER.email;

}
