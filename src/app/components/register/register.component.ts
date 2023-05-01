import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister: FormGroup;
  constructor(private fb: FormBuilder) {
      this.formRegister = this.fb.group({
          email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
          password: ['', Validators.required],
          name: ['', Validators.required],
          mobile: ['', Validators.required]
      });
  }
}
