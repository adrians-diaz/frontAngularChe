import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BodyMesasComponent } from './components/body-mesas/body-mesas.component';
import { BodyGalleryComponent } from './components/body-gallery/body-gallery.component';
import { BodyCarritoComponent } from './components/body-carrito/body-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    BodyMesasComponent,
    BodyGalleryComponent,
    BodyCarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
