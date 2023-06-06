import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as ace from "ace-builds";
@Component({
  selector: 'app-study-course',
  templateUrl: './study-course.component.html',
  styleUrls: ['./study-course.component.css']
})
export class StudyCourseComponent implements OnInit {

  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined ;
  valueCode:any;
  current_task:any;
  current_lesson:any;
  languages:any[]=['csharp', 'javascript', 'python','java']
  typeTask:any;
  output='';
  inputData ='';
  nameFile='';
  readonly testValue = new FormControl(this.languages[0]);

   idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
   idModule = Number(this.route.snapshot.paramMap.get('idModule'));
   idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
   idTask = Number(this.route.snapshot.paramMap.get('idTask'));

  loader:any = true;

  titleCurrentLesson:string = '';
  ngOnInit():void {
    this.getTask();
    this.getTasks();
    this.getCourse();
    this.getLesson();
    this.addLastChanges();
  }

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dataService: ApiService) {
  }
    submit():void {
      if(this.testValue.value=='csharp'){this.nameFile = 'main.cs';}
      if(this.testValue.value=='javascript'){this.nameFile = 'main.js';}
      if(this.testValue.value=='python'){this.nameFile = 'main.py';}
      if(this.testValue.value=='java'){this.nameFile = 'main.java';}

      const codeJson = {
        language: this.testValue.value,
        stdin: this.inputData,
        name: this.nameFile,
        content: this.valueCode
      };

      this.dataService.compileCode(codeJson)
        .pipe(first())
        .subscribe(
          data => {this.output = data.stdout;},
          error => {console.log(error);});
    }

    getTask() {
      this.dataService.getTask(this.idTask)
        .pipe(first())
        .subscribe(
          data=>{
            this.current_task = data[0];
            this.loader = false;
            this.determineTypeTask(this.current_task.idVariantTask)
           },
          error=>{console.log(error);})
    }

    name_course:any;

    getCourse(){
        this.dataService.getCourse(this.idCourse)
          .pipe(first())
          .subscribe(
            data=>{this.name_course = data[0].name;},
            error => {})
    }

    getLesson(){
      const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
      this.dataService.getLesson(idLesson)
        .pipe(first())
        .subscribe(
          data=>{
            this.current_lesson = data[0];
            this.titleCurrentLesson = this.current_lesson.text;
          },
          error=>{console.log(error);})
    }

    determineTypeTask(type:any){
      if(type==2){
        this.typeTask = 'Лекция';
        let myContainer = document.getElementById('lecture') as HTMLInputElement;
        myContainer.innerHTML = this.current_task.textTask;
      }
      if(type==1){this.typeTask = 'Тест';}
      if(type==3){this.typeTask = 'Программирование';}
      if(type==4){this.typeTask = 'Тест с вариантами ответов';}
    }

    current_tasks:any[] =[];
    next_task:any;
    isNext = false;
    getTasks(){
      const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
      this.dataService.getTasks(idLesson)
        .pipe(first())
        .subscribe(
          data=>{this.current_tasks = data;},
          error => {})
    }

  getUrlTask(item:any){
    this.router.navigate([
      'study', this.idCourse,
      'module', this.idModule,
      'lesson', this.idLesson,
      'step', item.idTask], {
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

  addLastChanges(){
    this.dataService.addLastChanges(
      this.idUser,
      this.idCourse,
      this.idModule,
      this.idLesson,
      this.idTask).pipe(first())
      .subscribe(
        data => {
        },
        error => {
        })
  }
  pageMenu=false;
  openDialogMenuCourse(){
    this.pageMenu = true;
  }
}
