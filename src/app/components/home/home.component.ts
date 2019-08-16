import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  pelisPopulares: any[] = [];
  popularesEntreNinos: any[] = [];

  cartelera: any;

  constructor( private peliculas: PeliculasService) {
    this.peliculas.getPopulars().subscribe((data: any) => {
      this.pelisPopulares = data.results;
    });

    this.peliculas.getPopularesNinos().subscribe((data2: any) => {
      this.popularesEntreNinos = data2.results;
      // console.log(this.popularesEntreNinos);
    });

    this.peliculas.getEstreno().subscribe((data3: any) => {
      // this.popularesEntreNinos = data3.results;
      console.log("object");
      console.log(data3);
      this.cartelera = data3.results;
    });

  }



}
