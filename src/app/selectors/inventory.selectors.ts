import {InventoryItem} from "../models/inventory.models";
import {createSelector} from "@ngrx/store";

export interface AppState {
  inventoryItems: InventoryState;
  error: any;
}

export interface InventoryState {
  inventoryItems: InventoryItem[];
  error: any;
}

export const selectInventory = (state: AppState) => state.inventoryItems;
export const selectInventoryItems = createSelector (selectInventory,(state) => state.inventoryItems);

export const selectInventoryError = createSelector(selectInventory, (state) => state.error)
