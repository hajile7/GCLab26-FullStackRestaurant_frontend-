import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../Models/order';
import { OrderServiceService } from '../../services/order-service.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {

  formOrder:Order = {} as Order;
  allOrders:Order[] = [];

  constructor(private orderService:OrderServiceService){}


  @Output() createEvent = new EventEmitter<Order>();

  createEmit(): void {
    this.createEvent.emit({...this.formOrder})
  }

  AddOrder():void {
    this.orderService.addOrder(this.formOrder).subscribe((response:Order) => {
      this.createEvent.emit(response);
    })
  }


}
