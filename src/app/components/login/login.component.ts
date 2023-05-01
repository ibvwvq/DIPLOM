import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isNotCorrect = false;

  isSubmit = false;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  postdata(formLogin:FormGroup) {
    this.isSubmit = true;
    this.dataService.userlogin(formLogin.value.email, formLogin.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/catalog';
          this.router.navigate([redirect]);
        },
        error => {
          this.isNotCorrect = true;
        });
  }
  get email() { return this.formLogin.get('email'); }
  get password() { return this.formLogin.get('password'); }

  get f() {return this.formLogin.controls}
}

