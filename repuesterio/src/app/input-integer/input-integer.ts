import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  @Input() cantidad = 0;
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

  onCantidadInput(value: number) {
    const cantidad = Number.isFinite(value) ? value : 0;
    this.cantidad = cantidad;
    this.cantidadChange.emit(this.cantidad);
  }
}
