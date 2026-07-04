import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Repuesto } from "./Repuesto";
import { FormsModule } from '@angular/forms';
import { REPUESTOS } from '../repuestos-data';

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
  repuestos: Repuesto[] = REPUESTOS;
}
