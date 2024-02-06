import {createReducer, on} from "@ngrx/store";
import {inventoryItemsLoadedError, loadInventoryItems} from "../actions/inventory.actions";
import {InventoryState} from "../selectors/inventory.selectors";

export const initialState: InventoryState = {
  inventoryItems: [],
  error: null,
}


export const inventoryReducer = createReducer(
  initialState,
  on(loadInventoryItems, (state) => ({
    ...state,
  })),
  on(inventoryItemsLoadedError, (state, action) => ({
    ...state,
    error: action.error,
  }))
)
