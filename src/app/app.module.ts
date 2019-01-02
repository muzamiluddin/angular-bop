import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { Metadata } from './shared/metadata';
import { AccountUtil } from './bop/services/account-util.service';


const routes: Routes = [
   { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
   { path: 'bop', loadChildren: './business-owners/business-owners.module#BusinessOwnersModule'},
   { path: 'business-owners', loadChildren: './business-owners/business-owners.module#BusinessOwnersModule'},
   { path: '**', loadChildren: './shared/home/home.module#HomeModule'},
   
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,     
    ToolbarComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    //StoreDevtoolsModule.instrument({ }),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [Metadata, AccountUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
