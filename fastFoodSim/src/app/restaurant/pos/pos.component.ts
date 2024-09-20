import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  constructor(public pedidoService: PedidoService){}

  pedido: Pedido = {
    name: '',
    description: '',
    number: 1    
  }

  enviarFormulario(form: NgForm){
    const num = this.pedido.number! ++;
    if(form.valid){
      const pedidoNuevo: Pedido = {
        description: this.pedido.description,
        name: this.pedido.name,
        number: num
      }
      const pedidoNuevoCoccion: Pedido = {
        description: this.pedido.description,
        name: this.pedido.name,
        number: num
      }
      this.pedidoService.add(pedidoNuevo);
      this.pedidoService.addACoccion(pedidoNuevoCoccion);
      form.resetForm();
    }else{
      alert("Ha ingresado un campo incorrectamente");
    }
  }
}
