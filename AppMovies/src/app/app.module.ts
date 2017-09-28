import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Routes*/
import { app_routing } from './app.routes'

/*Components*/
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMoviesComponent } from './components/detail-movies/detail-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    DetailMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
