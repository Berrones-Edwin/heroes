import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  data: Heroe[];
  constructor(
    private _heroService: HeroesService
  ) { }

  ngOnInit() {

    this.data = this._heroService.getHeroes();
  }

}
