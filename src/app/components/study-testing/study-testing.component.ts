import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {first} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-study-testing',
  templateUrl: './study-testing.component.html',
  styleUrls: ['./study-testing.component.css']
})
export class StudyTestingComponent implements OnInit{
  // @ts-ignore
  formAnswer= new FormGroup({
    valueAnswer:new FormControl(null)
  })

  constructor(
    private dataService:ApiService,
    private route:ActivatedRoute) {

  }

  loader = true;

  ngOnInit() {
    this.getTask();
    this.checkCompletedTask();
    this.getAnswers();

  }

  current_task:any;

  TASK_COMPLETED:any = false;

  current_name_task:any;

  getTask() {
 const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    console.log(idTask);
    this.dataService.getTask(idTask)
      .pipe(first())
      .subscribe(
        data=>{
          this.current_task = data[0];
          this.current_name_task = this.current_task.textTask;
        },
        error=>{console.log(error);})
  }

  right_answer:any;

  getAnswers(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    this.dataService.getCorrectAnswer(idTask)
      .pipe(first())
      .subscribe(
        data=>{
            this.right_answer = data[0].answer;
            console.log(this.right_answer);
        }, error => {console.log(error);})
  }

  disabledSubmitBtn = false;
  idNotCorrectAnswer = false;
  isCorrectAnswer = false;

  // @ts-ignore
  readonly testValue = new FormControl(this.right_answer);

  submitTest(){
    console.log(this.right_answer);
    if(this.formAnswer.value.valueAnswer == this.right_answer){
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
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

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
