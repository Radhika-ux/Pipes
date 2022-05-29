import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesinbuiltComponent } from './pipes/pipesinbuilt/pipesinbuilt.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesinbuiltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
