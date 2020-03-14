import {Component} from '@angular/core';
import {AppAuthService} from './app-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Compra (SXE)';

  constructor(public authService: AppAuthService) {
  }

  loginEmail() {
    this.authService.login().catch(error => {
      console.log('Login error:', error);
      if (error.code === 'auth/wrong-password') {
        alert('Contraseña no válida');
      } else if (error.code === 'auth/invalid-email') {
        alert('Formato email no válido');
      } else if (error.code === 'auth/user-not-found') {
        alert('Usuario no registrado');
      }
    });
  }

  registrar() {
    this.authService.register().catch(error => {
      console.log('Registry error:', error);
      if (error.code === 'auth/wrong-password') {
        alert('Contraseña no válida');
      } else if (error.code === 'auth/invalid-email') {
        alert('Formato email no válido');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('Correo en uso, intenta recuperar la contraseña');
      } else if (error.code === 'auth/weak-password') {
        alert('Contraseña insegura, debe tener 6 caracteres o mas');
      }
    });
  }

  recuperarPass() {
    this.authService.sendPasswordRequest()
      .then(() => {
        alert('Correo de recuperacion enviado');
      }).catch(error => {
      console.log('Recovery error', error);
      if (error.code === 'auth/invalid-email') {
        alert('Formato email no válido');
      } else if (error.code === 'auth/user-not-found') {
        alert('Correo no registrado válido');
      }
    });

  }
}
