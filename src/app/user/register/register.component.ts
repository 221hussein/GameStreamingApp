import { Component } from '@angular/core';

import {FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(20)
    ]),

    age: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  

}

