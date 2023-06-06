import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-check-lesson',
  templateUrl: './check-lesson.component.html',
  styleUrls: ['./check-lesson.component.css']
})
export class CheckLessonComponent implements AfterViewInit,OnInit{
  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined ;
  code:any;
  current_task:any;
  text_task:any;
  output='';
  inputData ='';
  nameFile='';
  id_student:any;
  name_student:any;
  id_answer:any;
  id_task:any;
  constructor(
    private route:ActivatedRoute,
    private dataService:ApiService) {}

  ngOnInit(){}

  formComment=new FormGroup({
    valueComment:new FormControl(null)
  })

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    // @ts-ignore
      const aceEditor = ace.edit(this.editor.nativeElement);
      const idAnswer =  Number(this.route.snapshot.paramMap.get('idAnswer'));

      this.dataService.getCodeFromAnsBySt(idAnswer)
        .pipe(first())
        .subscribe(
          data=>{
            console.log(data);
            this.id_answer = data[0].idAnswer;
            this.id_task = data[0].idTask;
            this.code = data[0].code;
            this.current_task = data[0].idTask;
            this.id_student = data[0].idStudent;
            aceEditor.session.setValue(this.code);
            this.getUser();
            this.getTask();
          },
          error=>{console.log(error);})
  }

  getTask(){
    this.dataService.getTask(this.current_task)
      .pipe(first())
      .subscribe(
        data=>{this.text_task = data[0].textTask;},
        error => {console.log(error);})
  }

  getUser(){
      this.dataService.getUser(this.id_student)
        .pipe(first())
        .subscribe(
          data=>{
            this.name_student = data[0].fullName;
          },
          error=>{
            console.log(error);
          }
        )
  }

  submitRight(){
    this.dataService.createAnswerByTeacher(
      this.id_answer,
      this.formComment.value.valueComment,
      3,
      this.id_student,
      this.id_task)
      .pipe(first())
      .subscribe(
        data=>{console.log(data);
        },error=>{console.log(error);})
  }

  submitWrong(){
    this.dataService.createAnswerByTeacher(
      this.id_answer,
      this.formComment.value.valueComment,
      2,
      this.id_student,
      this.id_task)
      .pipe(first())
      .subscribe(
        data=>{console.log(data);
        },error=>{console.log(error);})
  }
}
