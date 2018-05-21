import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeaguetableComponent } from './leaguetable/leaguetable.component';

import { LeaguetableserviceService } from './services/leaguetableservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LeaguetableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LeaguetableserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
