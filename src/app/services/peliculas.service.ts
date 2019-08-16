import { Injectable } from '@angular/core';
import 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '26c4adce64c03318f0bb8d47f215afb1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: HttpClientJsonpModule, private http: HttpClient ) { }

  getPopulars() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getEstreno() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;

    // tslint:disable-next-line: max-line-length
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopularesNinos() {
    // tslint:disable-next-line: max-line-length
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  ///

  searchMovie(movieName: string) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ movieName }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }



  getPeli(id: string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
  }

}
