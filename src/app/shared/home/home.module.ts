import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/shared/material/material.module';

const routes = [
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
