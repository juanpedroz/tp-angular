import { Component } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { CarritoRepuestos } from '../carrito-repuesto';
import { Repuesto } from '../lista-repuestos/Repuesto';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carito-card',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, DecimalPipe],
  templateUrl: './carito-card.html',
  styleUrl: './carito-card.scss',
})
export class CaritoCard {
  listaCarrito$: Observable<Repuesto[]>;

  constructor(private carritoRepuestos: CarritoRepuestos) {
    this.listaCarrito$ = carritoRepuestos.listaCarrito.asObservable();
  }

  hasCantidad(item: Repuesto): boolean {
    return item.cantidad > 0;
  }
}
