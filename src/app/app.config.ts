import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {provideRouterStore} from '@ngrx/router-store';
import {provideEffects} from '@ngrx/effects';
import * as inventoryEffects from "./effects/inventory.effects";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {inventoryReducer} from "./reducers/inventory.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouterStore(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(),
    provideState({name: 'inventory', reducer: inventoryReducer}),
    provideEffects(inventoryEffects)
  ]
};
