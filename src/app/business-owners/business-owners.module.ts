import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessOwnersComponent } from './business-owners.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { AccountReducer } from '../bop/business-info/state/account.reducer';

const routes = [{ path: '**', component: BusinessOwnersComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('account', AccountReducer)
  ],
  declarations: [BusinessOwnersComponent]
})
export class BusinessOwnersModule { }




