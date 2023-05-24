import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SyllabusService} from "../../services/syllabus/syllabus.service";
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit{
  formTask:FormGroup;

  constructor(
    private fb:FormBuilder,
    private dataService:ApiService,
    private syllabusService:SyllabusService,
    private route:ActivatedRoute) {
    this.formTask = this.fb.group({
      valueTask: []
    })
  }

    ngOnInit(){
      this.getCurrentLesson();

      }
    current_lesson :any;
    loaderEditLesson:boolean = true;
    getCurrentLesson(){
      const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));

      this.dataService.getLesson(idLesson)
        .pipe(first())
        .subscribe(
          data => {
            this.current_lesson = data[0].text;
            this.getTasks();
          },
          error => {
           console.log(error);
          });
    }

    TASKS:any[] = [];
    noneTask = false;
    current_task:any;
    current_answer_task:any;
    current_variant_task?:string;
    getTasks(){
      const idLesson:number = Number(this.route.snapshot.paramMap.get('idLesson'));
      this.dataService.getTasks(idLesson)
        .pipe(first())
        .subscribe(
          data => {
            this.TASKS = data;
            if(this.TASKS.length==0){
              this.noneTask = true;
            }
            this.current_task= this.TASKS[0];
            this.checkVariant(this.current_task.idVariantTask);
            this.loaderEditLesson = false;
          },
          error => {
            console.log(error);
          });
    }

  value='';
  choiceTask(item:any){
    this.current_task = item;

    this.checkVariant(this.current_task.idVariantTask);
  }

  checkVariant(variant:number){
    if(variant == 1){
      this.current_variant_task = "Тест";
      this.getCorrectAnswer();
      this.without_answer = false;
    }
    if(variant == 2){
      this.current_variant_task = "Лекция";
      this.without_answer = true;
    }
    if(variant == 3){
      this.current_variant_task = "Программирование";
      this.without_answer = true;
    }
    if(variant == 4){
      this.current_variant_task = "Тест с варинтами ответов";
      this.without_answer = false;
      this.getCorrectAnswer();
    }
  }

  deleteTask(){
   const idTask = this.current_task.idTask;

    this.dataService.deleteTask(idTask)
      .pipe(first())
      .subscribe(
        data => {
          window.location.reload()
        },
        error => {
          console.log("its not ok");
        });
  }

  dialogCreateTask = false;

  openCreateTask(){
    this.dialogCreateTask = true;
  }

  without_answer:any;
  getCorrectAnswer(){
    const idTask = this.current_task.idTask;
    this.dataService.getCorrectAnswer(idTask)
      .pipe(first())
      .subscribe(
        data => {
          this.current_answer_task = data[0];
          console.log(data);
        },
        error => {
          console.log("its not ok");
        });
  }
}
