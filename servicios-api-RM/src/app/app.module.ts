import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { RequestExampleService } from './request/service/request.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RequestExampleService], // importo el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
