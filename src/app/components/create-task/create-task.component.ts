import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  variantsTasks:any[] = ["Тест","Лекция","Программирование","Тест с вариантами ответов"];
  value = '';

  current_variant:number= 1;
  constructor(
    private dataService:ApiService,
    private route:ActivatedRoute,
    private fb:FormBuilder) {

  }
  formCreate = new FormGroup({
    valueTask: new FormControl(null,Validators.required),
    valueTextTask : new FormControl(),
    valueAnswer: new FormControl(),
    valueWrongAnswerOne: new FormControl(),
    valueWrongAnswerTwo: new FormControl(),
    valueWrongAnswerThree: new FormControl(),
  })


  stepOne = true;
  stepSecond = false;
  openSecondStep(){
    if(this.formCreate.valid){
      this.stepOne = false;
      this.stepSecond = true;
      this.chooseAnswer();
    }
  }
  answers:number = 0;

  backStep(){
    this.stepOne = true;
    this.stepSecond = false;
  }

  chooseAnswer(){
    // @ts-ignore
    if(this.formCreate.value.valueTask == "Тест с вариантами ответов"){
      this.answers = 4;
    }
    // @ts-ignore
    if(this.formCreate.value.valueTask == "Тест"){
      this.answers = 1;
    }
    // @ts-ignore
    if(this.formCreate.value.valueTask == "Программирование"){
      this.answers = 3;
    }
    // @ts-ignore
    if(this.formCreate.value.valueTask == "Лекция"){
      this.answers = 2;
    }
  }
isSubmit = false;
  isOk = false;
  isNotOk = false;

  idTask:any;
  createTask(){
    this.isSubmit = true;
    const idLesson:number = Number(this.route.snapshot.paramMap.get('idLesson'));
    const valueTextTask = this.formCreate.value.valueTextTask;
    const valueCorrectAnswer = this.formCreate.value.valueAnswer;

    if(this.answers == 2 || this.answers == 3){
        this.dataService.createTask(idLesson,this.answers,valueTextTask)
          .pipe(first())
          .subscribe(
            data => {

              window.location.reload()
              this.isOk = true;
              this.isNotOk = false;
            },
            error => {
              console.log("its not ok");
              this.isOk = false;
              this.isNotOk = true;
            });
      }


    if(this.answers == 1 || this.answers == 4){
      console.log(this.formCreate.value);
      this.dataService.createTask(idLesson, this.answers,this.formCreate.value.valueTextTask)
        .pipe(first())
        .subscribe(
          data => {
              this.idTask = data;
              console.log(data)
               this.createCorrectAnswer();
          },
          error => {
           console.log(error);
          });


    }


  }
  createCorrectAnswer(){
    this.dataService.createCorrectAnswer(this.idTask,this.answers,this.formCreate.value.valueAnswer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          if(this.answers == 4){
            this.createWrongAnswer(data,this.formCreate.value.valueWrongAnswerOne);
            this.createWrongAnswer(data,this.formCreate.value.valueWrongAnswerTwo);
            this.createWrongAnswer(data,this.formCreate.value.valueWrongAnswerThree);
          }
          this.isOk = true;
          this.isNotOk = false;
          window.location.reload()
        },
        error => {
          console.log(error);
          this.isOk = false;
          this.isNotOk = true;
        });
  }

  createWrongAnswer(idAnswer:any,textAnswer:any){
    this.dataService.createWrongAnswer(idAnswer,textAnswer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
