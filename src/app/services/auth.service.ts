import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

import IUser from "../models/user.models";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection : AngularFirestoreCollection<IUser>

  constructor(private auth : AngularFireAuth,
              private db : AngularFirestore) {
    this.usersCollection = db.collection<IUser>('users')
  }

  public async createUser (userData: IUser) {
    if (!userData.password) {
      throw new Error('Password is required')
    }
    const userCredential = await this.auth.createUserWithEmailAndPassword (
        userData.email as string ,
        userData.password as string
    )

    if (!userCredential.user) {
      throw new Error('User is not defined')
    }

    // this for creating a new collection in the database
    await this.usersCollection.doc(userCredential.user?.uid).set({
      name : userData.name,
      age : userData.age,
      email : userData.email,
      phoneNumber : userData.phoneNumber,
    })

    await userCredential.user.updateProfile({
        displayName : userData.name
    })
  }
}
