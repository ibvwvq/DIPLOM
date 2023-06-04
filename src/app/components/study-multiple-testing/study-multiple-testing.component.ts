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
  items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];

  formMultipleTest = new FormGroup({
    valueTesting: new FormControl(),
  });
  loader = true;

  ngOnInit(){
    this.getAnswers();
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
  getTask()
  {
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


}
