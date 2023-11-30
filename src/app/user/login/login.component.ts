import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  credentials = {
    email : '',
    password : ''
  }
  showAlert = false;
  alertMsg = 'please wait while we are logging you in .'
  alertColor = 'blue'
  inSubmission = false; // user shouldn't be able to submit the form if there is any mystique

  constructor(
    private auth :AngularFireAuth
  ) { }

  ngOnInit(): void {

  }

  // async is used to make the function wait for the promise to be resolved
  async login () {
    this.showAlert = true;
    this.alertMsg = 'please wait while we are logging you in'
    this.alertColor = 'green'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email as string ,
        this.credentials.password as string
      )
    }catch (e) {
      console.log(e)

      this.inSubmission = false
      this.alertMsg = 'An unexpected error has occurred, please try again'
      this.alertColor = 'red'
      return
    }

    this.alertMsg = 'you are logged in'
    this.alertColor = 'green'

  }
}
