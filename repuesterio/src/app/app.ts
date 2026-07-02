import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRepuestos } from "./lista-repuestos/lista-repuestos";
import { SideBarRepuesterio } from "./side-bar-repuesterio/side-bar-repuesterio";
import {CurrencyPipe, DatePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaRepuestos, SideBarRepuesterio,CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Repuesterio';
}
