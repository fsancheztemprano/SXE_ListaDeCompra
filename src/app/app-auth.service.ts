import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  email = '';
  pass = '';
  authUser = null;

  constructor(public myAuth: AngularFireAuth) {
  }

  user = this.myAuth.authState;

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
  }

  glogin() {
    console.log('google login!');
    this.myAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        console.log('user logado: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch(error => {
        console.log('error en google login: ', error);
      });
  }

  logout() {
    console.log('logout!');
    this.myAuth.auth.signOut();
  }

}
