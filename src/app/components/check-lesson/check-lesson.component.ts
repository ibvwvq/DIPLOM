import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as ace from "ace-builds";

@Component({
  selector: 'app-check-lesson',
  templateUrl: './check-lesson.component.html',
  styleUrls: ['./check-lesson.component.css']
})
export class CheckLessonComponent implements AfterViewInit{
  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined ;

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    // @ts-ignore
    const aceEditor = ace.edit(this.editor.nativeElement);
      aceEditor.session.setValue("");

  }
}
