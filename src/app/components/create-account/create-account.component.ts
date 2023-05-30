import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent {
    valueProgress:number = 1;
  formCreateAccount:FormGroup;
   constructor(
     private router:Router,
     private fb:FormBuilder)
   {
     this.formCreateAccount = this.fb.group({
       valueRole:[null],
       valueName:[null],
       valueEmail:[null],
       valuePassword:[null],
     })
   }
    next(){
      this.valueProgress++;
    }

  back(){
     if(this.valueProgress == 1){
       this.router.navigateByUrl('/personal-account')
     }
     this.valueProgress--;
  }

  createAccount(){


  }

    value='';

   roles:string[]=[
     'Студент',
     'Преподаватель',
     'Админ'
   ]
}
