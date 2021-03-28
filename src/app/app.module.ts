import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdleTimeoutModule } from 'projects/idle-timeout/src/lib/idle-timeout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdleTimeoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
