import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {InventoryService} from "../services/inventory.service";

@Injectable()
export class MoviesEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType('[Inventory Page] Load InventoryItems'),
      exhaustMap(() => this.inventoryService.getAll()
        .pipe(
          map(inventoryItems => ({ type: '[Inventory API] InventoryItems Loaded Success', payload: inventoryItems })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}
}
