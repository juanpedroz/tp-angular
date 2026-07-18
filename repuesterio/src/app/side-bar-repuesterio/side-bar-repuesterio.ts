import { Component } from '@angular/core';
import { CaritoCard } from '../carito-card/carito-card';
import { ResumenCard } from '../resumen-card/resumen-card';

@Component({
  selector: 'app-side-bar-repuesterio',
  standalone: true,
  imports: [CaritoCard,ResumenCard],
  templateUrl: './side-bar-repuesterio.html',
  styleUrl: './side-bar-repuesterio.scss',
})
export class SideBarRepuesterio {}
