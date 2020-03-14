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

  signEmail() {
    this.authService.login().catch(error => {
      if (error.code === 'auth/wrong-password') {
        alert('Contraseña no válida');
      } else if (error.code === 'auth/invalid-email') {
        alert('Formato email no válido');
      }
    });
  }
}
