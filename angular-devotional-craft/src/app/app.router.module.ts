import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingWordsComponent } from './home/setting-words/setting-words.component';
import { ArtworksListComponent } from './home/artworks-list/artworks-list.component';
import { CardDetailComponent } from './home/card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

const AppRoutes: Routes = [
  {path : 'artworks-list', component : ArtworksListComponent},
  {path : 'card-detail', component : CardDetailComponent},
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});

