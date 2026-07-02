import { Component } from '@angular/core';
import { Repuesto } from './Repuesto';

@Component({
  selector: 'app-lista-repuestos',
  imports: [],
  templateUrl: './lista-repuestos.html',
  styleUrl: './lista-repuestos.scss',
})
export class ListaRepuestos {
  repuestos: Repuesto[] = [
    {
    codigo : 'A65',
    descripcion : 'Multiple escape 3 cil',
    precio : 10000,
    stock : 10,
    imagen : "assets/img/a65.jpeg",
    promo: true,
  },
  {
    codigo : '0301-8684',
    descripcion : 'Multiple escape 4 cil asp +',
    precio : 10000,
    stock : 0,
    imagen : "assets/img/a65.jpeg",
    promo: false,
  },
  {
    codigo : '913-7825',
    descripcion : 'Multiple escape turbo',
    precio : 10000,
    stock : 10,
    imagen : "assets/img/a65.jpeg",
    promo: false,
  },
];
repuesto: any;
}
