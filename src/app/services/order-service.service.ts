import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  url:string = "https://localhost:7055/api";
  constructor(private http:HttpClient) { }

  getAllOrders():Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/Orders`);
  }

  addOrder(o:Order):Observable<Order> {
    return this.http.post<Order>(`${this.url}/Orders`, o);
  }

  deleteOrder(o:Order):Observable<Order> {
    return this.http.delete<Order>(`${this.url}/Orders/${o.id}`);
  }

}
