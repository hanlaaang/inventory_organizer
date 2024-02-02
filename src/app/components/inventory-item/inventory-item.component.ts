import {Component, Input} from '@angular/core';
import {InventoryItem, Item} from "../../models/inventory.models";

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {

  @Input()
  public inventoryItem: InventoryItem | undefined;

  items: Item[] | undefined;
  totalAmount: number = 0;
  availableAmount: number = 0;
  constructor() {
    this.items = this.inventoryItem?.items;
    this.totalAmount = this.getTotalAmount();
    this.availableAmount = this.getAvailableAmount();
  }

  private getAvailableAmount() {
    return this.items?.filter(item => item.borrowPeriodStart != null).length || 0;
  }

  private getTotalAmount() {
    return this.items?.length || 0;
  }

}



