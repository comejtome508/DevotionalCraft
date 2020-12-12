import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingWordsComponent } from './home/setting-words/setting-words.component';
import { ArtworksListComponent } from './home/artworks-list/artworks-list.component';
import { CardDetailComponent } from './home/card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule} from './app.router.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddArtworkComponent } from './add-artwork/add-artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingWordsComponent,
    ArtworksListComponent,
    CardDetailComponent,
    HomeComponent,
    AddArtworkComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
