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
    getCurrentLesson(){
      const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));

      this.dataService.getLesson(idLesson)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
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
          },
          error => {
            console.log(error);
          });
    }
  variantsTask:any[] = ["Тест","Лекция","Программирование","Тест с варинтами ответов"];

  value='';
  choiceTask(item:any){
    this.current_task = item;

    this.checkVariant(this.current_task.idVariantTask);
  }

  checkVariant(variant:number){
    if(variant == 1){
      this.current_variant_task = "Тест";
    }
    if(variant == 2){
      this.current_variant_task = "Лекция";
    }
    if(variant == 3){
      this.current_variant_task = "Программирование";
    }
    if(variant == 4){
      this.current_variant_task = "Тест с варинтами ответов";
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


}
