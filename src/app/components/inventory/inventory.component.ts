import {Component, effect, inject, signal, WritableSignal} from '@angular/core';
import {InventoryItem} from "../../models/inventory.models";
import {Store, StoreModule} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {InventoryItemComponent} from "../inventory-item/inventory-item.component";
import {InventoryActions} from "../../actions/inventory.actions";
import {selectAllInventoryItems} from "../../selectors/inventory.selectors";

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
export class InventoryComponent {

  inventoryItems: WritableSignal<InventoryItem[]> = signal([]);
  private readonly store: Store = inject(Store)

  constructor() {
    effect(() => {
      this.inventoryItems.set(this.store.selectSignal(selectAllInventoryItems)());
    }, {allowSignalWrites: true});
    effect(() => {
      this.store.dispatch(InventoryActions.loadInventoryItems());
    }, {allowSignalWrites: true})
  }
}
