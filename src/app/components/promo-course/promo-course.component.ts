import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-promo-course',
  templateUrl: './promo-course.component.html',
  styleUrls: ['./promo-course.component.css']
})
export class PromoCourseComponent implements OnInit{
  constructor(
    private dataService:ApiService,
    private route: ActivatedRoute) {}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));
    this.getCourse(id);
  }

  current_course:any;

  getCourse(id:any){
      this.dataService.getCourse(id)
        .pipe(first())
        .subscribe(
          data => {
                console.log(data);
                this.current_course = data[0];
            },
        error => {
          console.log(error);
        })
  }
}

