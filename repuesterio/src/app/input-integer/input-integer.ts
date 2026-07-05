import { Component, Input } from '@angular/core';
import { Repuesto } from '../lista-repuestos/Repuesto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  @Input() repuesto!: Repuesto;

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
}
