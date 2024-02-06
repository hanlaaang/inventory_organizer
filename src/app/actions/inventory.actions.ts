import {createAction, props} from "@ngrx/store";

export const loadInventoryItems = createAction('[Inventory Page] Load Inventory Items');

export const inventoryItemsLoadedError = createAction('[Inventory API] InventoryItems Loaded Error', props<{ error: string }>());
