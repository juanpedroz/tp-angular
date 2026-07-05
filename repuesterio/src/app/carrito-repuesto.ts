import { Injectable } from '@angular/core';
import { Repuesto } from './lista-repuestos/Repuesto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoRepuestos {

  private _listaCarrito: Repuesto[] = [];
  listaCarrito: BehaviorSubject<Repuesto[]> = new BehaviorSubject(this._listaCarrito);

  agregarAlCarrito(repuesto: Repuesto) {
    let item: Repuesto | undefined = this._listaCarrito.find((v1) => v1.codigo === repuesto.codigo);
    if (item) {
      item.cantidad += repuesto.cantidad;
    } else {
      this._listaCarrito.push({... repuesto});// Agrega una copia del repuesto al carrito
    }
    this.listaCarrito.next(this._listaCarrito);// Actualiza el BehaviorSubject con la nueva lista del carrito
  }

}
