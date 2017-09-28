import { Component } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
public movies = [];
public savemovie:any = {};
public savemovie2:any = {};
public estado:string = '';
public estado2:string='true';


constructor(){
  this.movies = [
              {name: 'Harry Potter' , duration:'120' , year: '2001' , sinopsis: 'aaaaaaaaaa'},
              {name: 'Titanic' , duration:'100' , year: '1998', sinopsis: 'aaaaaaaaaa'},
              {name: 'Avatar' , duration:'130' , year: '2009', sinopsis: 'aaaaaaaaaa'},
              {name: 'Iron Man' , duration:'130' , year: '2009', sinopsis: 'aaaaaaaaaa'},
              {name: 'Terminator' , duration:'130' , year: '1989', sinopsis: 'aaaaaaaaaa'}
            ];

 /*reinicio*/
  //localStorage.clear();
  //this.addLocalstorage();


  /* this.movies del localStorage*/
  this.getitemsLocalstorage();
}

addLocalstorage():void{
  localStorage.setItem("movies", JSON.stringify(this.movies));
}

getitemsLocalstorage():void{
  this.movies = JSON.parse(localStorage.getItem("movies"));
}

addMovie():void{
            this.movies.push(this.savemovie);
            $('.form-control').val('');
            this.addLocalstorage();
          }

deletMovie(i):void{
  var answer = confirm('estas seguro que quiere eliminar la pelicula de la lista?')
  if(answer) {
              this.movies.splice(i, 1);
              localStorage.clear();
              this.addLocalstorage();
             }
}

myvalue;
editMovie(i):void{
  this.getitemsLocalstorage();
  this.savemovie2.name = this.movies[i].name;
  this.savemovie2.duration = this.movies[i].duration;
  this.savemovie2.year = this.movies[i].year;
  this.savemovie2.sinopsis = this.movies[i].sinopsis;
  this.myvalue = i;
  this.estado = 'true';
  this.estado2 = '';
}

updateMovie():void{
  let i = this.myvalue;
  for(let j = 0; j < this.movies.length; j++){
    if(i == j) {
      this.movies[i] = this.savemovie2;
      localStorage.clear();
      this.addLocalstorage();
      this.savemovie2 = {};
    }
  }
  this.estado2 = 'true';
  this.estado = '';
  $('.form-control').val('');
}


}
