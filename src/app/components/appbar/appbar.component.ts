import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CreatedCoursesService } from 'src/app/services/created-courses/created-courses.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit{
  constructor(private dataService: ApiService,private createdCourses:CreatedCoursesService) { }
  logout() {
    this.dataService.deleteToken();
  }
  user:any = '';
  USER:any = '';
  isAdmin:boolean = false;
  ngOnInit():void {
   this.user = localStorage.getItem('role');
   this.USER = JSON.parse(this.user);

    if(this.USER == 1){
      this.isAdmin = true;
    }
  }

  getPageAdmin(){
    this.createdCourses.getCoursesFromApi();
  }

}
