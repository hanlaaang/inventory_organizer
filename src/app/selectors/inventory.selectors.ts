import {InventoryItem} from "../models/inventory.models";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface AppState {
  inventoryItems: InventoryState;
  error: any;
}

export interface InventoryState {
  inventoryItems: InventoryItem[];
  error: string | undefined;
}

export const selectInventoryState = createFeatureSelector<InventoryState>('inventory');

export const selectAllInventoryItems = createSelector(
  selectInventoryState,
  state => (
    state.inventoryItems
  )
)
