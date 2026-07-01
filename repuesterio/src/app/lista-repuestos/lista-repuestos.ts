import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-repuestos',
  imports: [],
  templateUrl: './lista-repuestos.html',
  styleUrl: './lista-repuestos.scss',
})
export class ListaRepuestos {
  repuesto = {
    "codigo" : "A65",
    "descripcion" : "Multiple escape 3 cil",
    "precio" : "0000",
    "stock" : "10",
    "imagen" : "assets/img/a65.jpeg"
  }
}
