import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";

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


  constructor(
    private route:ActivatedRoute,
    private dataService:ApiService) {}

  ngOnInit(){}

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
            this.code = data[0].code;
            this.current_task = data[0].idTask;
            aceEditor.session.setValue(this.code);
            this.getTask();
          },
          error=>{console.log(error);})
  }

  getTask(){
    this.dataService.getTask(this.current_task)
      .pipe(first())
      .subscribe(
        data=>{
          this.text_task = data[0].textTask;
        },
        error => {
          console.log(error);

        }
      )
  }
}
