import {Component, OnInit} from '@angular/core';
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-course',
  templateUrl: './menu-course.component.html',
  styleUrls: ['./menu-course.component.css']
})
export class MenuCourseComponent implements OnInit{
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dataService:ApiService) {}
   idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));

  ngOnInit() {
    this.getCurrentModules(this.idCourse);
  }

  modules:any[]=[];
  lessons:any[]=[];
  tasks:any[]=[];
  getCurrentModules(idCourse: any) {
    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          this.modules = data;
          for(let i = 0;i<this.modules.length;i++){
            this.dataService.getLessons(this.modules[i].idModule)
              .pipe(first())
              .subscribe(
                data => {
                  this.lessons[i] = data;
                  },
                error => {console.log(error);});}
        },
        error => {
          console.log(error);
        });
  }

  idTask:any;

  goOverLesson(idModule:any, idLesson:any):void{
    this.dataService.getTasks(idLesson)
      .pipe(first())
      .subscribe(
        data=>{
          console.log(data);
          this.idTask = data[0].idTask;
        },
        error=>{
          console.log(error);
        }
      )
    this.router.navigate([
      'study', this.idCourse,
      'module', idModule,
      'lesson', idLesson,
      'step', this.idTask], {
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    console.log(this.idCourse,idModule,idLesson,this.idTask)
  }

}
