import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {InventoryService} from "../services/inventory.service";
import {InventoryActions} from "../actions/inventory.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

export const loadInventoryItems = createEffect(
  (actions$ = inject(Actions), store = inject(Store), inventoryService = inject(InventoryService)) => {
    return actions$.pipe(
      ofType(InventoryActions.loadInventoryItems),
      switchMap(() => {
        return inventoryService.getInventoryItems().pipe(
          map(data => InventoryActions.loadInventoryItemsSuccess({
            inventoryItems: data
          })),
          catchError((error: HttpErrorResponse) =>
            of(InventoryActions.loadInventoryItemsError({error: error.message}))
          )
        )
      })
    )
  },
  {functional: true}
)
