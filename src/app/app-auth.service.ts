import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  email = '';
  pass = '';
  authUser = null;

  constructor(public fireAuth: AngularFireAuth) {
  }

  user = this.fireAuth.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (authState) {
      this.authUser = authState;
      return authState;
    } else {
      return null;
    }
  }));

  loginWithProvider(provider: firebase.auth.AuthProvider) {
    this.fireAuth.auth.signInWithPopup(provider)
      .then(user => {
        console.log('Logged user: ', user);
        this.email = user.user.email;
        this.pass = '';
        this.authUser = user.user;
      })
      .catch(error => {
        console.log('error en login: ', error);
      });
  }

  /*user = this.miauth.authState.pipe( map( authState => {
  console.log('authState', authState);
  if (!authState) {
    return null;
  } else {
    // …
    return authState;
  }
}) );
*/
  login() {
    console.log('login!');
    return this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(user => {
        console.log('User login: email: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch(error => {
        console.log('error en login: ', error);
        if (error.code === 'auth/wrong-password') {
          alert('Wrong Password');
        }
      });
  }


  //   console.log('google login!');
  //
  // }
  //
  //
  logout() {
    console.log('logout!');
    this.fireAuth.auth.signOut();
  }

  //
  glogin() {
    console.log('google login!');
    return this.loginWithProvider(new firebase.auth.GoogleAuthProvider());
  }

  sendPasswordRequest() {
    return this.fireAuth.auth.sendPasswordResetEmail(this.email)
      .then(() => {
        alert('Recovery email sent');
      }).catch(error => {
        alert('Email nor found');
        console.log('Password request error', error);
      });
  }
}
