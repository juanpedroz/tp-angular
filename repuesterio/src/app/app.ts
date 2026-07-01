import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRepuestos } from "./lista-repuestos/lista-repuestos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaRepuestos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Repuesterio';
}
