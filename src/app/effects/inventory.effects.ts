import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {InventoryService} from "../services/inventory.service";

@Injectable()
export class InventoryEffects {

  loadInventory$ = createEffect(() => this.actions$.pipe(
      ofType('[Inventory Page] Load Inventory Items'),
      exhaustMap(() => this.inventoryService.getAll()
        .pipe(
          map(inventoryItems => ({ type: '[Inventory API] InventoryItems Loaded Success', payload: inventoryItems })),
          catchError(() => of({ type: '[Inventory API] InventoryItems Loaded Error' }))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}
}
