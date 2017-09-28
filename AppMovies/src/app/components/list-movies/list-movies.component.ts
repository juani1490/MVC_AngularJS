import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent extends AppComponent {
  constructor() {
    super();
    }

}
