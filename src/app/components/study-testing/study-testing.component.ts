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
  formAnswer= new FormGroup({
    valueAnswer:new FormControl(null)
  })

  constructor(
    private dataService:ApiService,
    private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.getTask();
    this.getAnswers();
  }

  current_task:any;

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


  submitTest(){
    if(this.formAnswer.value.valueAnswer == this.right_answer){
      this.isCorrectAnswer = true;
      this.idNotCorrectAnswer = false;
      this.disabledSubmitBtn = true;

    }
    else{
        this.idNotCorrectAnswer = true;
        this.isCorrectAnswer = false;
    }
  }
}
