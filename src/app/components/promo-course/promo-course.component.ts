import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";

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
  }

  // getCourse(id:any){
  //     this.dataService.getC
  // }
}
