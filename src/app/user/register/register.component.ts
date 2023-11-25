import { Component } from '@angular/core';

import {FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  
  name = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    // Validators.maxLength(20)
  ])

  age = new FormControl('',[
  Validators.required,
  Validators.min(18),
  Validators.max(110)
])

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])

  password = new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    Validators.minLength(8),
    Validators.maxLength(20)
  ])
  password_confirmation = new FormControl('',[
    Validators.required,
  ])
  phoneNumber = new FormControl('',[
  Validators.required,
  Validators.minLength(9),
  Validators.maxLength(9)
])
  
  registerForm = new FormGroup({
    name : this.name,
    age : this.age,
    email : this.email,
    password : this.password,
    password_confirmation : this.password_confirmation,
    phoneNumber : this.phoneNumber
  });



}

