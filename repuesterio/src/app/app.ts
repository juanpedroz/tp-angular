import { Component } from '@angular/core';
import { ListaRepuestos } from './lista-repuestos/lista-repuestos';
import { SideBarRepuesterio } from './side-bar-repuesterio/side-bar-repuesterio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaRepuestos, SideBarRepuesterio],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'Repuesterio';
}
