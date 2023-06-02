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

  // 3️⃣
    @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined;

  // 4️⃣
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

  value:any;

  formTest:any = FormGroup;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private dataService: ApiService) {
    this.formTest = this.fb.group({
       code: [],
       input: []
    })
  }

  public ngOnInit() {
  }

    submit()
    {
      const obj = {
        code: this.value,
        input:23 ,
      };

      // // @ts-ignore
      // const aceEditor = ace.edit(this.editor.nativeElement);
      // aceEditor.session.setValue("");
      //
      // aceEditor.on("change", () => {
      //   console.log(aceEditor.getValue());
      //   this.value = aceEditor.getValue();
      // });

      console.log(obj);
      this.dataService.testCompile(obj)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);

          });
    }

    getHistory()
    {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.dataService.getHistoryCourse(id)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
    }
  }
