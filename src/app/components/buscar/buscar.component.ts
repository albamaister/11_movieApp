import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent  {
  busquedas: any [] = [];
  constructor(private _ps: PeliculasService,  private router: Router) {

   }

   search(termino: string) {
   
    this._ps.searchMovie(termino).subscribe((data: any) => {
      console.log(data);
      this.busquedas = data.results;
      });
  }

  verPeli(item: any) {
    let peliId;
    this.router.navigate(['/pelicula', item.id]);

  }

 
}
