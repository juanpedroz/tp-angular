import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Repuesto } from "./Repuesto";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-repuestos',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './lista-repuestos.html',
  styleUrl: './lista-repuestos.scss',
})
export class ListaRepuestos {
sumarCantidad(repuesto: Repuesto) {
  if (repuesto.cantidad < repuesto.stock) {
    repuesto.cantidad++;
  }
}
restarCantidad(repuesto: Repuesto) {
  if (repuesto.cantidad > 0) {
    repuesto.cantidad--;
  }
}
  repuestos: Repuesto[] = [
    {
    codigo : 'A65',
    descripcion : 'Multiple escape 3 cil',
    precio : 10000,
    stock : 10,
    imagen : "assets/img/a65.jpeg",
    promo: true,
    cantidad: 0,
  },
  {
    codigo : '0301-8684',
    descripcion : 'Multiple escape 4 cil asp +',
    precio : 10000,
    stock : 0,
    imagen : "assets/img/a65.jpeg",
    promo: false,
    cantidad: 0,
  },
  {
    codigo : '913-7825',
    descripcion : 'Multiple escape turbo',
    precio : 10000,
    stock : 10,
    imagen : "assets/img/a65.jpeg",
    promo: false,
    cantidad: 0,
    },
  ];
}
