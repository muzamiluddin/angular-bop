import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInfoComponent } from './business-info.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material/material.module';
//import { StoreModule } from '@ngrx/store';
//import { AccountReducer } from './state/account.reducer';



const routes = [{ path: '**', component: BusinessInfoComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
//    StoreModule.forFeature('account', AccountReducer)
  ],
  declarations: [BusinessInfoComponent]
})
export class BusinessInfoModule { }
