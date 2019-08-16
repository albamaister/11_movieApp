import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})

// hay que revisar si existe posterpath o backdroppath entonces se va a recibir una pelicula completa
export class PeliculaImagenPipe implements PipeTransform {

  

  transform(pelicula: any): any {
    const url = 'http://image.tmdb.org/t/p/w500';

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if ( pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/no-image.jpg';
      }

    }
  }

}
