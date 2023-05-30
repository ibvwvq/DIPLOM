import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent {
    valueProgress:number = 1;
  formCreateAccount:FormGroup;
   constructor(
     private dataService:ApiService,
     private router:Router,
     private fb:FormBuilder)
   {
     this.formCreateAccount = this.fb.group({
       valueRole:[null,Validators.required],
       valueName:[null,Validators.required],
       valueEmail:[null,[Validators.email,Validators.required]],
       valuePassword:[null,Validators.required],
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
    this.isNotOk = false;
    this.isNotValid = false;
    this.isOk = false;
  }


  determineRole(){
    if(this.formCreateAccount.value.valueRole=='Студент'){
      this.role = 3;
    }

    if(this.formCreateAccount.value.valueRole=='Админ'){
      this.role = 1;
    }

    if(this.formCreateAccount.value.valueRole=='Преподаватель'){
      this.role = 2;
    }
  }
  role:number = 3;
   isNotValid = false;
   isNotOk = false;
    isOk = false;

  createAccount(){
    console.log(this.formCreateAccount.value);

    this.determineRole();
    if(this.formCreateAccount.valid){
      this.isNotValid=false;
      this.dataService.createAccount(this.role,this.formCreateAccount.value.valueName,
        this.formCreateAccount.value.valueEmail,this.formCreateAccount.value.valuePassword)
        .pipe(first())
        .subscribe(
          data => {
            console.log("ok")
            this.isNotOk = false;
            this.isOk = true;

          },
          error => {
            console.log(error);
            this.isNotOk = true;
            this.isOk = false;
          });
    }
    else{
      this.isNotValid=true;
    }
  }

    value='';

   roles:string[]=[
     'Студент',
     'Преподаватель',
     'Админ'
   ]
}
