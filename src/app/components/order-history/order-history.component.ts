import { Component, EventEmitter, input } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { FormsModule } from '@angular/forms';
import { Order } from '../../Models/order';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [FormsModule, OrderFormComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  allOrders:Order[] = [];

  constructor(private orderService:OrderServiceService){}

  ngOnInit() {
    this.orderService.getAllOrders().subscribe((response:Order[]) => {
      this.allOrders = response;
    })
  }

  AddOrder(o:Order) {
    this.allOrders.push(o);
  }

  DeleteOrder(o:Order):void {
    let index:number = this.allOrders.findIndex(x => x == o);
    this.allOrders.splice(index, 1);
    this.orderService.deleteOrder(o).subscribe();
  }

}
