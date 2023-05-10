import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit{
  constructor(private dataService: ApiService) { }
  logout() {
    this.dataService.deleteToken();
  }
  user:any = '';
  USER:any = '';
  isAdmin:boolean = false;
  ngOnInit():void {
   this.user = localStorage.getItem('user');
   this.USER = JSON.parse(this.user);

    if(this.USER.idUser == 3){
      this.isAdmin = false;
    }
    if(this.dataService.CURRENT_ROLE == 1){
      this.isAdmin = true;
    }
  }


}
