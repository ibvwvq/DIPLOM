import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-study-multiple-testing',
  templateUrl: './study-multiple-testing.component.html',
  styleUrls: ['./study-multiple-testing.component.css']
})
export class StudyMultipleTestingComponent implements OnInit{
  // @ts-ignore
  items = [{name: 'answer 1'}, {name: 'answer 3'}, {name: 'answer 3'},{name:'answer4'}];

  formMultipleTest = new FormGroup({
    valueTesting: new FormControl(),
  });
  loader = true;

  ngOnInit(){
    this.getAnswers();
    this.checkCompletedTask();
    this.getTask();
  }

  right_answer:any;
  name_right_answer:any;
  wrong_answers:any[]=[];
  constructor(
    private route:ActivatedRoute,
    private dataService:ApiService) {}

  getAnswers(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    this.dataService.getCorrectAnswer(idTask)
      .pipe(first())
      .subscribe(
        data=>{
         this.right_answer = data[0];
         this.name_right_answer = this.right_answer.answer;
          this.dataService.getWrongAnswer(this.right_answer.idAnswer)
            .pipe(first())
            .subscribe(
              data=>{
                this.wrong_answers = data;
                this.loader = false;
              },
              error => {})
        }, error => {console.log(error);})
  }
  current_task:any;
  test_task:any;
  getTask() {
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    console.log(idTask);
    this.dataService.getTask(idTask)
      .pipe(first())
      .subscribe(
        data=>{
          this.current_task = data[0]
          this.test_task = this.current_task.textTask;
        },
        error=>{console.log(error);})
  }

  disabledSubmitBtn = false;
  idNotCorrectAnswer = false;
  isCorrectAnswer = false;

  submitAnswer(){
    console.log(this.formMultipleTest.value.valueTesting);
    if(this.formMultipleTest.value.valueTesting.name == 'answer 1'){
      this.isCorrectAnswer = true;
      this.idNotCorrectAnswer = false;
      this.disabledSubmitBtn = true;
      this.addCompletedTask();
    }
    else{
      this.idNotCorrectAnswer = true;
      this.isCorrectAnswer = false;

    }
  }
  addCompletedTask(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
    console.log(idTask);
    this.dataService.addCompletedTask(this.idUser,idTask)
      .pipe(first())
      .subscribe(
        data=>{},
        error=>{console.log(error)}
      )
  }
  completed_tasks:any[] =[];
  TASK_COMPLETED = false;

  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

  checkCompletedTask(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
    this.dataService.getCompletedTasks(this.idUser,idLesson)
      .pipe(first())
      .subscribe(
        data=>{
          this.completed_tasks = data;
          console.log(data);
          for(let i=0;i<this.completed_tasks.length;i++){
            if(this.completed_tasks[i].idTask == idTask){
              this.TASK_COMPLETED = true;
              this.disabledSubmitBtn = true;
              this.loader = false;
            }
          }
          this.loader = false;
        },error => {console.log(error)}
      )
  }
}
