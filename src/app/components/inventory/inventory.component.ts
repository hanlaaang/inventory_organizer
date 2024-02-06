import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {InventoryItem} from "../../models/inventory.models";
import {select, Store, StoreModule} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {InventoryItemComponent} from "../inventory-item/inventory-item.component";
import {AppState, selectInventory, selectInventoryItems} from "../../selectors/inventory.selectors";
import {InventoryEffects} from "../../effects/inventory.effects";

@Component({
  imports: [
    AsyncPipe,
    InventoryItemComponent,
    StoreModule,
  ],
  providers: [
    StoreModule,
  ],
  selector: 'app-inventory',
  standalone: true,
  styleUrl: './inventory.component.css',
  templateUrl: './inventory.component.html'
})
export class InventoryComponent implements OnInit {

  inventoryItems$: Observable<InventoryItem[]>;

  constructor(private store: Store<AppState>) {
    this.inventoryItems$ = store.select(selectInventoryItems);
  }
  ngOnInit() {
    this.store.dispatch({type: '[Inventory Page] Load Inventory Items'});
    console.log('dispatched load inventory items')
    this.inventoryItems$.subscribe({
      next: (inventoryItems) => {
        console.log('inventoryItems', inventoryItems)
      }
    });
  }

}
