import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingWordsComponent } from './home/setting-words/setting-words.component';
import { ArtworksListComponent } from './home/artworks-list/artworks-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes} from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



const router : Routes = [
  {path : 'artworks-list', component : ArtworksListComponent},
  {path : 'card-detail', component : CardDetailComponent},
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingWordsComponent,
    ArtworksListComponent,
    CardDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false}),
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
