import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  constructor() { }
  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  page4: boolean = false;


  openPageOOP() {
    this.page1 = true;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;
  }

  openPageTests() {
    this.page2 = true;
    this.page1 = false;
    this.page3 = false;
    this.page4 = false;
  }

  openPageUnity() {
    this.page3 = true;
    this.page1 = false;
    this.page4 = false;
    this.page2 = false;

  }

  openPageWeb() {
    this.page4 = true;
    this.page1 = false;
    this.page3 = false;
    this.page2 = false;
  }



  formSearchCourses = new FormGroup({
    valueName: new FormControl(''),
  })
}
