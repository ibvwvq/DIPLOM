import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  formLogin: FormGroup;
  isNotCorrect = false;

  isSubmit = false;

  loaderAuth = false;

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    public loginService: LoginService) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }
  qw:any;
  CURRENT_USER:any;
  postdata(formLogin:FormGroup) {
    this.loaderAuth = true;
    this.isSubmit = true;
    this.dataService.userlogin(formLogin.value.email, formLogin.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/personal-account';
          this.router.navigate([redirect]);
          this.loaderAuth = false;
        },
        error => {
          this.isNotCorrect = true;
          this.loaderAuth = false;

        });
  }
  get email() { return this.formLogin.get('email'); }
  get password() { return this.formLogin.get('password'); }

  get f() {return this.formLogin.controls}
}

