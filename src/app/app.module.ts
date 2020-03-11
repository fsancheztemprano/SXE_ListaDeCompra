import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
