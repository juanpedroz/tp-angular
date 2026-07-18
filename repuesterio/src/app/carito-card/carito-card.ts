import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CarritoRepuestos } from '../carrito-repuesto';
import { Repuesto } from '../lista-repuestos/Repuesto';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carito-card',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './carito-card.html',
  styleUrl: './carito-card.scss',
})
export class CaritoCard {
  listaCarrito$: Observable<Repuesto[]>;

  constructor(private carritoRepuestos: CarritoRepuestos) {
    this.listaCarrito$ = carritoRepuestos.listaCarrito.asObservable();
  }
}
