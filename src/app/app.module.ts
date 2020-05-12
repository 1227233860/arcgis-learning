import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'ArcgisConfig',
      useValue: {
        js: `https://js.arcgis.com/4.15/init.js`,
        css: `https://js.arcgis.com/4.15/esri/themes/light/main.css`
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
