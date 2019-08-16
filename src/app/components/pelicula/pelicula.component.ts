import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {
  pelicula: any = {};
  constructor(private router: ActivatedRoute, private _sp: PeliculasService) {
    this.router.params.subscribe( params => {
      this.getPeli( params['id']);
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
