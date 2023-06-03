import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent  implements OnInit{
  constructor(private dataService:ApiService) { }
  LS_user:any = localStorage.getItem("user");
  idUser:any = JSON.parse(this.LS_user).idUser;
  @ViewChild("btn-favourite") private favourite: ElementRef<HTMLElement> | undefined;

  ngOnInit() {
    this.FAVOURITES =[];

    this.getAllCourses();
  }
  courses:any[]=[];
  courses_fav:any[] = [];
  teachers:any[]=[];
  loader = false;

  FAVOURITES:any[] = [];

  getAllCourses(){
    this.loader = true;
    this.dataService.getAllCourses()
      .pipe(first())
      .subscribe(
        data => {
          this.courses = data;
          this.dataService.getFavouriteCourses(this.idUser)
            .pipe(first())
            .subscribe(
              data=>{
                this.courses_fav = data;
                for(let i = 0; i<this.courses.length;i++){
                  for(let j =0;j<this.courses_fav.length;j++){
                    if(this.courses[i].idCourse == this.courses_fav[j].idCourse){
                      this.FAVOURITES.push(this.courses[i].idCourse);
                    }
                  }
                }
                this.loader = false;
              },
              error => {console.log(error);})
        },
        error => {this.loader = false;});
  }


  p:any;

  formSearchCourses = new FormGroup({
    valueName: new FormControl(''),
  })

  valueSearch = '';

}
