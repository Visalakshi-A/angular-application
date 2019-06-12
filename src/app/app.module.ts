import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ABoxComponent } from './a-box/a-box.component';
import { BBoxComponent } from './b-box/b-box.component';
import { CBoxComponent } from './c-box/c-box.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ABoxComponent,
    BBoxComponent,
    CBoxComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
