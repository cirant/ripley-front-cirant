import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string;

  constructor(public fbAuth: AngularFireAuth, private router: Router) {
    const sessionToken = sessionStorage.getItem('token');
    if(sessionToken){
      this.token = sessionToken;
    }
  }

  async login(email, password) {
    try {
      const response = await this.fbAuth.auth.signInWithEmailAndPassword(email, password);
      this.token = await this.fbAuth.auth.currentUser.getIdToken(true);
      sessionStorage.setItem('token', this.token);
      return true;
    } catch (e){
      console.log('error ', e);
      return false;
    }
  }

  async getCurrentUserToken() {
    return await this.fbAuth.auth.currentUser.getIdToken(true);
  }

  async loginGoogle(){
    try {
      await this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      this.token = await this.fbAuth.auth.currentUser.getIdToken(true);
      sessionStorage.setItem('token', this.token);
      return true;
    } catch (error) {
      console.log('error loginGoogle ', error);
    }
  }

  async logout() {
    await this.fbAuth.auth.signOut();
    this.token = null;
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  isLogged():boolean {
    return Boolean(this.fbAuth.auth.currentUser);
  }

}
