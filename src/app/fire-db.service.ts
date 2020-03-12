import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase) {
  }

  altausuario(nuevoCorreo: string, nuevoUid: string) {
    this.db.object('users/userUID/' + nuevoUid.toString()).update({correo: nuevoCorreo});
    console.log('Insertado uid:correo : ' + nuevoUid + ':' + nuevoCorreo);
  }

  bajausuario(uid: string) {
    this.db.object('users/userUID/' + uid).remove();
  }
}
