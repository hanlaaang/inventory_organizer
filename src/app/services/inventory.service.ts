import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  public getInventoryItems() {
    return of(this.mockInventory);
  }

  // create mock data for inventory items
  // use InventoryItem model
  private mockInventory: InventoryItem[] = [
    {
      id: 1,
      name: 'Bike',
      imageUrl: 'https://images.unsplash.com/photo-1556740730-5e4b2e7a3b6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'vehicle',
      items: [
        {
          id: 1,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        },
        {
          id: 2,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        },
        {
          id: 3,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        }
      ]
    },
    {
      id: 2,
      name: 'Lawn Mower',
      imageUrl: 'https://images.unsplash.com/photo-1589828340513-3e8d6e6e8e6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'garden',
      items: [
        {
          id: 1,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        },
        {
          id: 2,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        },
        {
          id: 3,
          borrowPeriodStart: new Date(),
          borrowPeriodEnd: new Date()
        }
      ]
    }
  ]


}

export interface InventoryItem {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  items: Item[];
}

export interface Item {
  id: number;
  borrowPeriodStart?: Date;
  borrowPeriodEnd?: Date;
}
