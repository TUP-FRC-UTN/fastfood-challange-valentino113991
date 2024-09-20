import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[] = [];

  pedidosParaCoccion: Pedido[] = [];

  pedidosParaEntregar: Pedido[] = [];

  add(p: Pedido) : void{
    this.pedidos.push(p);
  }

  addACoccion(ped: Pedido) : void{
    this.pedidosParaCoccion.push(ped);
  }

  addAEntregas(ped: Pedido) : void{
    this.pedidosParaEntregar.push(ped);
  }
}
