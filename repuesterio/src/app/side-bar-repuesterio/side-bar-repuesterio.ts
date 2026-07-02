import { Component } from '@angular/core';
import { CaritoCard } from '../carito-card/carito-card';
import { ResumenCard } from '../resumen-card/resumen-card';
import { PromoCard } from '../promo-card/promo-card';

@Component({
  selector: 'app-side-bar-repuesterio',
  imports: [CaritoCard,ResumenCard,PromoCard],
  templateUrl: './side-bar-repuesterio.html',
  styleUrl: './side-bar-repuesterio.scss',
})
export class SideBarRepuesterio {}
