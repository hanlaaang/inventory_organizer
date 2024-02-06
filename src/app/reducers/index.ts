import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {isDevMode} from "@angular/core";
import {inventoryReducer} from "./inventory.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  inventory: inventoryReducer,
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
