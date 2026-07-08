import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { Repuesto } from "./Repuesto";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepuestosDataService } from '../repuestos-data';
import { InputInteger } from "../input-integer/input-integer";
import { CarritoRepuestos } from '../carrito-repuesto';

@Component({
  selector: 'app-lista-repuestos',
  standalone: true,
  imports: [NgClass, FormsModule, InputInteger, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './lista-repuestos.html',
  styleUrl: './lista-repuestos.scss',
})
export class ListaRepuestos implements OnInit {
  repuestos: Repuesto[] = [];

  constructor(
    private carritoRepuestos: CarritoRepuestos,
    private repuestosDataService: RepuestosDataService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.repuestosDataService.getRepuestos().subscribe((repuestos: Repuesto[]) => {
      this.repuestos = Array.isArray(repuestos) ? repuestos : [];
      this.cdr.detectChanges();
    });
  }

  agregarAlCarrito(repuesto: Repuesto) {
    this.carritoRepuestos.agregarAlCarrito(repuesto);
    repuesto.stock -= repuesto.cantidad;
    repuesto.cantidad = 0;
  }

  trackByCodigo(index: number, repuesto: Repuesto): string {
    return repuesto.codigo;
  }
}
