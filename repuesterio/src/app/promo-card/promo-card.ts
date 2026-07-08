import { Component } from '@angular/core';
import { Repuesto } from '../lista-repuestos/Repuesto';
//import { REPUESTOS } from '../repuestos-data';

@Component({
  selector: 'app-promo-card',
  standalone: true,
  templateUrl: './promo-card.html',
  styleUrl: './promo-card.scss',
})
export class PromoCard {
  repuestos: Repuesto[] = [];
}

