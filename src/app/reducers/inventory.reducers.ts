import {createReducer, on} from "@ngrx/store";
import {InventoryState} from "../selectors/inventory.selectors";
import {InventoryActions} from "../actions/inventory.actions";

export const initialState: InventoryState = {
  inventoryItems: [],
  error: undefined,
}

export const inventoryReducer = createReducer(
  initialState,
  on(InventoryActions.loadInventoryItemsSuccess, (state, {inventoryItems}): InventoryState => (
    { ...state, inventoryItems: inventoryItems, error: undefined })
  ),
  on(InventoryActions.loadInventoryItemsError, (state, {error}): InventoryState => (
    { ...state, error: error })
  )
)
