import {Component, OnInit} from '@angular/core';
import {PRODUCTOS} from '../MockProductos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos = PRODUCTOS;

  constructor() {
  }

  ngOnInit() {
  }

  toggleProducto(i: number) {
    this.productos[i].comprado = !this.productos[i].comprado;
  }
}
