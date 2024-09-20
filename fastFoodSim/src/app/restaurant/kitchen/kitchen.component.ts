import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  constructor(public pedidoService: PedidoService){}
  pedidosSegundaFase: Pedido[] = [];
  
  agregarACoccion(p: Pedido){
    if(this.pedidosSegundaFase.length == 0){
      this.pedidoService.pedidosParaCoccion = this.pedidoService.pedidosParaCoccion.filter(ped => ped !== p);
      this.pedidosSegundaFase.push(p);
    } else{
      alert("Sólo un pedido puede estar en el área de cocción a la vez");
    }
  }

  terminarCoccion(){
    this.pedidoService.addAEntregas(this.pedidosSegundaFase[0]);
    this.pedidosSegundaFase = this.pedidosSegundaFase.filter(pedido => pedido !== this.pedidosSegundaFase[0]);
  }
}
