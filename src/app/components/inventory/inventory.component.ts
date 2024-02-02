import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {InventoryItem} from "../../models/inventory.models";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {InventoryItemComponent} from "../inventory-item/inventory-item.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    AsyncPipe,
    InventoryItemComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{

  inventoryItems$: Observable<InventoryItem[]> = this.store.select(state => state.inventoryItems)

  constructor(private store: Store<{inventoryItems: InventoryItem[]}>) {
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Inventory Page] Load InventoryItems' });
  }

}
