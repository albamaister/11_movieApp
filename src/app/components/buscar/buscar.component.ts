import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent  {
  busquedas: any [] = [];
  buscar = '';
  constructor(public _ps: PeliculasService,  private router: Router, public route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        if (params['texto']) {
          this.buscar = params['texto'];
          this.search();
        }
      })
   }

   search() {
    if (this.buscar.length === 0) {
      return;
    }

    console.log(this.buscar);

    this._ps.searchMovie(this.buscar).subscribe();
  }

  //  search(termino: string) {

  //   this._ps.searchMovie(termino).subscribe((data: any) => {
  //     console.log(data);
  //     this.busquedas = data.results;
  //     });
  // }

  verPeli(item: any) {
    let peliId;
    this.router.navigate(['/pelicula', item.id]);

  }

 
}
