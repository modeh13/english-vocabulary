import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components';

@NgModule({
   declarations: [
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HomeRoutingModule
   ],
   providers: [],
})

export class HomeModule { }