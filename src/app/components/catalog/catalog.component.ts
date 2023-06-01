import {Component, OnInit} from '@angular/core';
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

  ngOnInit() {
      this.getAllCourses();
  }
  courses:any[]=[];
  teachers:any[]=[];
  loader = false;
  getAllCourses(){
    this.loader = true;
    this.dataService.getAllCourses()
      .pipe(first())
      .subscribe(
        data => {
          this.courses = data;
          console.log(data);
          this.loader = false;

        },
        error => {
            console.log("its not ok");
          this.loader = false;

        });
  }
  p:any;


  formSearchCourses = new FormGroup({
    valueName: new FormControl(''),
  })



}
