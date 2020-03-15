import {Component, OnInit} from '@angular/core';
import {FireDBService} from '../fire-db.service';
import {ProductoModel} from '../producto.model';

@Component({
  selector: 'app-creador-productos',
  templateUrl: './creador-productos.component.html',
  styleUrls: ['./creador-productos.component.css']
})
export class CreadorProductosComponent implements OnInit {

  constructor(public fireDb: FireDBService) {
  }

  productos = this.fireDb.db.list('productos/');

  ngOnInit() {
  }

  add(value: string) {
    this.fireDb.insertarProducto(new ProductoModel(value));
  }
}
