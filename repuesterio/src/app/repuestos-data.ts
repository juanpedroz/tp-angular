import { Injectable } from '@angular/core';
import { Repuesto } from './lista-repuestos/Repuesto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const ENDPOINT = 'https://6a4ce188e1cf82a4a17dbc1c.mockapi.io/repuesterio';
@Injectable({
  providedIn: 'root',
})

export class RepuestosDataService {

  repuestos: Repuesto[] = [];

  constructor(private http: HttpClient) { }

  public getRepuestos(): Observable<Repuesto[]> {
    return this.http.get<any[]>(ENDPOINT).pipe(
      map((repuestos: any[]) => repuestos.map((repuesto) => ({
        ...repuesto,
        precio: Number(String(repuesto.precio).replace(',', '.')) || 0,
        stock: Number(repuesto.stock) || 0,
        promo: String(repuesto.promo).toLowerCase() === 'true',
        cantidad: 0,
      })) ),
      tap((repuestos: Repuesto[]) => {
        this.repuestos = repuestos;
      }),
    );

  }
}

// export const REPUESTOS: Repuesto[] = [
//   {
//     codigo: 'A65',
//     descripcion: 'Multiple escape 3 cil',
//     precio: 10000,
//     stock: 0,
//     imagen: 'assets/img/a65.jpeg',
//     promo: true,
//     cantidad: 0,
//   },
//   {
//     codigo: '0301-8684',
//     descripcion: 'Multiple escape 4 cil asp +',
//     precio: 10000,
//     stock: 3,
//     imagen: 'assets/img/a65.jpeg',
//     promo: false,
//     cantidad: 0,
//   },
//   {
//     codigo: '913-7825',
//     descripcion: 'Multiple escape turbo',
//     precio: 10000,
//     stock: 10,
//     imagen: 'assets/img/a65.jpeg',
//     promo: false,
//     cantidad: 0,
//   },
//   {
//     codigo: '913-7825',
//     descripcion: 'Multiple escape turbo',
//     precio: 1000,
//     stock: 10,
//     imagen: 'assets/img/a65.jpeg',
//     promo: true,
//     cantidad: 0,
//   },
// ];
