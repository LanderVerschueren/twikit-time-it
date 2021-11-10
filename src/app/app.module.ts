import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ListitemComponent } from './components/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ButtonComponent,
    ListComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
