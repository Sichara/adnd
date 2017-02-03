import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharacterSheetModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
