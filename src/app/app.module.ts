import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './bop/side-nav/side-nav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
   { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
   { path: 'bop', loadChildren: './bop/business-info/business-info.module#BusinessInfoModule'},
   { path: '**', loadChildren: './shared/home/home.module#HomeModule'},
   
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
