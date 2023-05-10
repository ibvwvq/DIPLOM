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

  isAdmin:boolean = false;
  ngOnInit():void {
    if(this.dataService.CURRENT_ROLE == 3){
      this.isAdmin = false;
    }
    if(this.dataService.CURRENT_ROLE == 1){
      this.isAdmin = true;
    }
  }


}
