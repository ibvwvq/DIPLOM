import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import * as ace from "ace-builds";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";

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
  }
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
    if(this.testValue.value =='csharp'){
      aceEditor.session.setValue(this.code);
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
          console.log(this.typeTask);
          console.log(data);
        },
        error=>{console.log(error);})
  }
  code:any = 'using System;\n' +
    'using System.Collections.Generic;\n' +
    'using System.Linq;\n' +
    'using System.Text;\n' +
    'using System.Threading.Tasks;\n' +
    '\n' +
    'namespace ConsoleApp\n' +
    '{\n' +
    '    internal class Program\n' +
    '    {\n' +
    '        static void Main(string[] args)\n' +
    '        {\n' +
    '\n' +
    '        }\n' +
    '    }\n' +
    '}\n';
  keyup(event:any){
   // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
    if(this.testValue.value =='csharp'){
      aceEditor.session.setValue(this.code);
    }

    if(this.testValue.value =='javascript'){
      aceEditor.session.setValue('');
    }

    if(this.testValue.value =='python'){
      aceEditor.session.setValue('');
    }
  }
}
