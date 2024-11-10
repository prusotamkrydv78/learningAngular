import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddtocartbuttonComponent } from 'src/components/addtocartbutton/addtocartbutton.component';

@NgModule({
  declarations: [AppComponent,AddtocartbuttonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
