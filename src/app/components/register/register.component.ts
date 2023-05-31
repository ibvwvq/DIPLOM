import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isNotCorrect = false;
  loaderRegister = false;
  formRegister: FormGroup;
  isSubmit = false;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.formRegister = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required,Validators.minLength(5)]],
      password_repeat:[null,[Validators.required,Validators.minLength(5)]],
      name: [null, [Validators.required]]
    });
  }

  ngOnInit() {

  }

isNotValid = false;

  registerUser(formRegister:FormGroup) {
    this.loaderRegister = true;
    this.isSubmit = true;


    if(this.formRegister.controls.email.valid && this.formRegister.controls.name && this.formRegister.controls.password.valid &&
    this.formRegister.controls.password_repeat.valid){
      if((this.formRegister.value.password == this.formRegister.value.password_repeat)){
        this.dataService.userregistration(formRegister.value.name, formRegister.value.email, formRegister.value.password)
          .pipe(first())
          .subscribe(
            data => {
              this.router.navigate(['login']);
              this.loaderRegister = false;
            },

            error => {
              this.isNotCorrect = true;
              this.loaderRegister = false;
            });
      }
      else{
        this.isNotValid = true;
        this.loaderRegister = false;
      }

    }
    else{
      this.loaderRegister = false;
    }
  }

  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }
  get name() { return this.formRegister.get('name'); }

  get f() {return this.formRegister.controls}
}



