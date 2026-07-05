import { Component } from '@angular/core';
import { ListaRepuestos } from "../lista-repuestos/lista-repuestos";
import { SideBarRepuesterio } from "../side-bar-repuesterio/side-bar-repuesterio";

@Component({
  selector: 'app-home-repuesterio',
  imports: [ListaRepuestos, SideBarRepuesterio],
  templateUrl: './home-repuesterio.html',
  styleUrl: './home-repuesterio.scss',
})
export class HomeRepuesterio {}
