import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessOwnersComponent } from './business-owners.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { AccountReducer } from './reducers/account.reducer';
import { ScreenReducer } from './reducers/screen.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './effects/account.effects';

const routes = [{ path: '**', component: BusinessOwnersComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transaction', {
      account: AccountReducer,
      appState: ScreenReducer,
    }),
    EffectsModule.forRoot([AccountEffects]),
  ],
  declarations: [BusinessOwnersComponent, BusinessInfoComponent, EligibilityComponent]
})
export class BusinessOwnersModule { }




