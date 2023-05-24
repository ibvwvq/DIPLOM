import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  variantsTasks:any[] = ["Тест","Лекция","Программирование","Тест с вариантами ответов"];
  value = '';

  current_variant:number= 1;
  formCreate:FormGroup;
  constructor(
    private fb:FormBuilder) {
    this.formCreate = this.fb.group({
      valueTask:[],
      valueTextTask:[],
      valueAnswer:[],
      valueWrongAnswerOne:[],
      valueWrongAnswerTwo:[],
      valueWrongAnswerThree:[]
    })
  }

  stepOne = true;
  stepSecond = false;
  openSecondStep(){
    this.stepOne = false;
    this.stepSecond = true;
    this.chooseAnswer();
  }

  answers:number = 0;

  backStep(){
    this.stepOne = true;
    this.stepSecond = false;
  }

  chooseAnswer(){
    if(this.formCreate.value.valueTask == "Тест с вариантами ответов"){
      this.answers = 1;
    }
    if(this.formCreate.value.valueTask == "Тест"){
      this.answers = 2;
    }
    if(this.formCreate.value.valueTask == "Программирование"){
      this.answers = 3;
    }
    if(this.formCreate.value.valueTask == "Лекция"){
      this.answers = 4;
    }
  }
}
