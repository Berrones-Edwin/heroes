import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  heroes: Heroe[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {

    this.heroes = [];

    this.activatedRoute.params
      .subscribe(
        res => {

          if (!res) return;
          this.heroes = this._heroService.searchHeroe(res.nombre);

          console.log(this.heroes);
          

        },
        err => {
          console.log('Error ', err);

        }
      )
  }

  ver_heroe(i) :void {
    this.router.navigate([
      '/heroe',
      i
    ])
  }

}
