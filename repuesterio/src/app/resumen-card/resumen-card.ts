import { Component } from '@angular/core';
import { NgIf, AsyncPipe, DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarritoRepuestos } from '../carrito-repuesto';

@Component({
  selector: 'app-resumen-card',
  standalone: true,
  imports: [NgIf, AsyncPipe, DecimalPipe],
  templateUrl: './resumen-card.html',
  styleUrl: './resumen-card.scss',
})
export class ResumenCard {
  total$: Observable<number>;

  constructor(private carritoRepuestos: CarritoRepuestos) {
    this.total$ = this.carritoRepuestos.listaCarrito.pipe(
      map((items) =>
        items.reduce(
          (sum, item) => sum + (Number(item.precio) || 0) * (Number(item.cantidad) || 0),
          0,
        ),
      ),
    );
  }
}
