import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {
  pelicula: any;
  regresarA = '';
  busqueda = '';
  constructor(private route: ActivatedRoute, private _sp: PeliculasService) {
    this.route.params.subscribe( params => {
     // console.log(params);
      this.getPeli( params['id']);
      this.regresarA = params['pag'];
      if (params['busqueda']) {
      this.busqueda = params['busqueda'];
      }
    });
  }

  getPeli( id: string ) {
    
    this._sp.getPeli( id ).subscribe( peli => {
      console.log( peli );
      this.pelicula = peli;
    }, error => {
      console.log(error);
    });
  }

}
