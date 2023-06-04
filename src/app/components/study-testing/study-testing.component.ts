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
  }

  current_task:any;

  current_name_task:any;

  getTask()
  {
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


}
