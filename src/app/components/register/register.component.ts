import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isNotCorrect = false;
  formRegister: FormGroup;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(formRegister:FormGroup) {
    if(formRegister.value.name == '' || formRegister.value.password == '' || formRegister.value.email == ''){
        this.isNotCorrect = true;
    }
    else{
      this.dataService.userregistration(formRegister.value.name, formRegister.value.email, formRegister.value.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['login']);
          },
  
          error => {
            this.isNotCorrect = true;
          });
    }
  }

  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }
  get name() { return this.formRegister.get('name'); }
}



