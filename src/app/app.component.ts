import {Component} from '@angular/core';
import {AppAuthService} from './app-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Compra (SXE)';

  constructor(public authComponent: AppAuthService) {
  }
}
