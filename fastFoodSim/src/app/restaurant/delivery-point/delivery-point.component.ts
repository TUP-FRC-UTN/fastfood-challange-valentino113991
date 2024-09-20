import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  constructor(public pedidoService: PedidoService){}

  entregar(p: Pedido){
    this.pedidoService.pedidosParaEntregar = this.pedidoService.pedidosParaEntregar.filter( ped => ped != p);
    alert("PEDIDO ENTREGADO!");
  }
}
