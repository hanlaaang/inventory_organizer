import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideRouterStore} from '@ngrx/router-store';
import {provideEffects} from '@ngrx/effects';
import {reducers, metaReducers} from './reducers';
import {InventoryEffects} from "./effects/inventory.effects";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, {metaReducers}),
    provideRouterStore(),
    provideEffects(InventoryEffects),
    provideHttpClient(withInterceptorsFromDi())]
};
