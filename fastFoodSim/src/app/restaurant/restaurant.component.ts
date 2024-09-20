import { Component, Input } from '@angular/core';
import { PosComponent } from './pos/pos.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  constructor(public pedidoService: PedidoService){}

}
