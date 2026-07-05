import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Repuesto } from "./Repuesto";
import { FormsModule } from '@angular/forms';
import { REPUESTOS } from '../repuestos-data';
import { InputInteger } from "../input-integer/input-integer";

@Component({
  selector: 'app-lista-repuestos',
  standalone: true,
  imports: [NgClass, FormsModule, InputInteger, NgIf],
  templateUrl: './lista-repuestos.html',
  styleUrl: './lista-repuestos.scss',
})
export class ListaRepuestos {
  repuestos: Repuesto[] = REPUESTOS;
}
