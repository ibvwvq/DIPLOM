import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";
import * as ace from "ace-builds";
@Component({
  selector: 'app-study-course',
  templateUrl: './study-course.component.html',
  styleUrls: ['./study-course.component.css']
})
export class StudyCourseComponent implements OnInit, AfterViewInit {

  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined ;
  value:any;
  valueLang:any = '';
  current_task:any;
  languages:any[]=[
    'csharp',
    'javascript',
    'python'
  ]
  typeTask:any;
  readonly testValue = new FormControl(this.languages[0]);
  ngOnInit():void {
    this.getTask();
    if(this.typeTask == 'Лекция'){
      let myContainer = document.getElementById('lecture') as HTMLInputElement;
      myContainer.innerHTML = this.current_task.textTask;
    }
  }
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("");
    aceEditor.on("change", () => {
      // console.log(aceEditor.getValue());
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
      if(this.testValue.value=='csharp'){
        this.nameFile = 'main.cs';
      }
      if(this.testValue.value=='javascript'){
        this.nameFile = 'main.js';
      }
      if(this.testValue.value=='python'){
        this.nameFile = 'main.py';
      }

      const codeJson = {
        language: this.testValue.value,
        stdin: this.inputData,
        name: this.nameFile,
        content: this.value
      };

      this.dataService.testCompile(codeJson)
        .pipe(first())
        .subscribe(
          data => {
            this.output = data.stdout;
            console.log(this.output);
            },
          error => {console.log(error);});
    }

    getTask()
    {
      const idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
      const idModule = Number(this.route.snapshot.paramMap.get('idModule'));
      const idLesson = Number(this.route.snapshot.paramMap.get('idLesson'));
      const idTask = Number(this.route.snapshot.paramMap.get('idTask'));
      console.log(idTask);
      this.dataService.getTask(idTask)
        .pipe(first())
        .subscribe(
          data=>{
            this.current_task = data[0]
            this.determineTypeTask(this.current_task.idVariantTask)
           },
          error=>{console.log(error);})
    }
  determineTypeTask(type:any){
    if(type==2){
      this.typeTask = 'Лекция';
      let myContainer = document.getElementById('lecture') as HTMLInputElement;
      myContainer.innerHTML = this.current_task.textTask;

    }
    if(type==1){
      this.typeTask = 'Тест';
    }
    if(type==3){
      this.typeTask = 'Программирование';
    }
    if(type==4){
      this.typeTask = 'Тест с вариантами ответов';
    }
  }


  }
