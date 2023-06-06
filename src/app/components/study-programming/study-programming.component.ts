import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import * as ace from "ace-builds";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {startCodeCsharp, startCodeJava} from "../../services/CONSTANT";

@Component({
  selector: 'app-study-programming',
  templateUrl: './study-programming.component.html',
  styleUrls: ['./study-programming.component.css']
})
export class StudyProgrammingComponent implements OnInit,AfterViewInit{
  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined ;
  @ViewChild("lang") private lang: ElementRef<HTMLElement> | undefined ;
  // @ts-ignore
  value:any;
  current_task:any;
  languages:any[]=[
    'csharp',
    'javascript',
    'python',
    'java'
  ]
  typeTask:any;
  readonly testValue = new FormControl(this.languages[0]);
  ngOnInit():void {
    this.getTask();
    this.checkCompletedTask();
    this.getStatusCode();
  }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
    if(this.testValue.value =='csharp'){
      aceEditor.session.setValue(startCodeCsharp);
    }

    aceEditor.on("change", () => {
      this.value = aceEditor.getValue();
    });

  }

  output='';
  inputData ='';
  nameFile='';
  constructor(
    private route: ActivatedRoute,
    private dataService: ApiService) {
  }
  submit():void
  {
    if(this.testValue.value=='csharp'){this.nameFile = 'main.cs';}
    if(this.testValue.value=='javascript'){this.nameFile = 'main.js';}
    if(this.testValue.value=='python'){this.nameFile = 'main.py';}
    if(this.testValue.value=='java'){this.nameFile = 'Test.java';}

    const codeJson = {
      language: this.testValue.value,
      stdin: this.inputData,
      name: this.nameFile,
      content: this.value
    };

    this.dataService.compileCode(codeJson)
      .pipe(first())
      .subscribe(
        data => {
          this.output = data.stdout;
          console.log(this.output);
        },
        error => {console.log(error);});
  }
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

  submitTeacher(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    const idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
    console.log(this.value);
    this.dataService.addCodeForTeacher(idTask,this.idUser,this.value,idCourse)
      .pipe(first())
      .subscribe(
        data=>{
        // window.location.reload();
        },
        error => {
        // window.location.reload();
          })
  }

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
          console.log(this.typeTask);
          console.log(data);
        },
        error=>{console.log(error);})
  }

  keyup(event:any){
   // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
    if(this.testValue.value =='javascript'){aceEditor.session.setValue('');}
    if(this.testValue.value =='python'){aceEditor.session.setValue('');}
    if(this.testValue.value =='java'){aceEditor.session.setValue(startCodeJava);}
  }
  completed_tasks:any;
  TASK_COMPLETED: boolean = false;
  disabledSubmitBtn:boolean = false;
  loader:any = true;
  answers_checking:any[] = [];
  checkCompletedTask(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));

    this.dataService.getCompletedTasks(this.idUser,idLesson)
      .pipe(first())
      .subscribe(
        data=>{
          this.completed_tasks = data;
          console.log(data);
          this.getStatusCode();

          for(let i=0;i<this.completed_tasks.length;i++){
            if(this.completed_tasks[i].idTask == idTask){
              this.TASK_COMPLETED = true;
              this.disabledSubmitBtn = true;
              this.loader = false;
            }
          }
          // this.loader = false;

        },error => {console.log(error)}
      )
  }


  code:any;
  status?:number;
  getStatusCode(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
    this.dataService.getStatusCode(idTask)
      .pipe(first())
      .subscribe(
        data=>{
          this.code = data[0].code;
          this.status = data[0].idStatusAnswer;
          console.log(data[0].idStatusAnswer);
          this.determineStatus();
        },
        error => {
          console.log(error);})
  }
  onInspection = false;
  successfully = false;
  unSuccessfully=false;
  CommentTeacher:any;
  getComment(){
    const idTask = Number(this.route.snapshot.paramMap.get('idTask'));

    this.dataService.getCheckAnsForStudents(idTask)
      .pipe(first())
      .subscribe(data=>{
        this.CommentTeacher = data[0].CommentTeacher;
      },error=>{
        console.log(error);
      })
  }
  determineStatus(){
    // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);

    if(this.status == 2){
      this.disabledSubmitBtn = true;
      aceEditor.session.setValue(this.code);
      this.successfully = true;

      this.unSuccessfully = false;
      this.onInspection = false;
  }
    if(this.status == 3){
      this.getComment();
      aceEditor.session.setValue(this.code);
      this.unSuccessfully = true;

      this.successfully = false;
      this.onInspection = false;
  }
    if(this.status == 1){
      this.disabledSubmitBtn = true;
      aceEditor.session.setValue(this.code);
      this.onInspection = true;

      this.unSuccessfully = false;
      this.successfully = false;
    }
  }
}
