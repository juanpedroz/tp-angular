import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Repuesto } from '../lista-repuestos/Repuesto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  @Input() cantidad!: number;
  @Input() max!: number;

  @Output() cantidadChange = new EventEmitter<number>();

  sumarCantidad() {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
