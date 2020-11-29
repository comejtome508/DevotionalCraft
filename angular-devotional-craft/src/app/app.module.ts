import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingWordsComponent } from './setting-words/setting-words.component';
import { ArtworksListComponent } from './artworks-list/artworks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingWordsComponent,
    ArtworksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
