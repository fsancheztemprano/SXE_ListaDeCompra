import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ProductoModel} from './producto.model';

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

  insertarProducto(producto: ProductoModel) {
    return this.db.database.ref('productos/').push({
      nombre: producto.nombre
    }).then(a => console.log('insercion realizada: ', a))
      .catch(er => console.log('Error en insercion: ', er));
  }
}
