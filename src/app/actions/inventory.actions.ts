import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {InventoryItem} from "../models/inventory.models";

export const InventoryActions = createActionGroup({
  source: 'Inventory',
  events: {
    'Load Inventory Items': emptyProps(),
    'Load Inventory Items Success': props<{ inventoryItems: InventoryItem[] }>(),
    'Load Inventory Items Error': props<{ error: string }>()
  }
})
