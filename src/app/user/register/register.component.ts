import { Component } from '@angular/core';

import {FormGroup , FormControl, Validators} from '@angular/forms';

import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(private auth : AngularFireAuth,
              private db : AngularFirestore) { }

  // user shouldn't be able to submit the form if
  // there is any mysteque
  inSubmission = false;

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

    const {
      email,
      password,
    } = this.registerForm.value;

    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword (
          email as string ,
          password as string
      )

      // this for creating a new collection in the database
      await this.db.collection('users').add({
        name : this.name.value,
        age : this.age.value,
        email : this.email.value,
        phoneNumber : this.phoneNumber.value
      })
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

