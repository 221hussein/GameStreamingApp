import { Component } from '@angular/core';

import {FormGroup , FormControl, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

import IUser from "../../models/user.models";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(
      private auth: AuthService
  ) { }

  // user shouldn't be able to submit the form if
  // there is any mysteque
  inSubmission = false;

  name = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    // Validators.maxLength(20)
  ])

  age = new FormControl<number | null>(null,[
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

showAlert = false;
alertMsg = 'Please wait your account is being created'
alertColor = 'blue'

  registerForm = new FormGroup({
    name : this.name,
    age : this.age,
    email : this.email,
    password : this.password,
    password_confirmation : this.password_confirmation,
    phoneNumber : this.phoneNumber
  });


  async register(){
    this.showAlert = true;
    this.alertMsg = 'Please wait your account is being created'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      this.auth.createUser(
          this.registerForm.value as IUser
      )
    }catch (e) {
      console.error(e)

      this.alertMsg = 'An unexpected error has occurred, please try again'
      this.alertColor = 'red'
      this.inSubmission = false
      // this return will stop the function execution
      return
    }

    this.alertMsg = 'Your account has been created successfully'
    this.alertColor = 'green'
  }


}

