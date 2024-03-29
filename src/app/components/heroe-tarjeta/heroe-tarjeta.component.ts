import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) {

    this.heroeSeleccionado = new EventEmitter();
  }
  ver_heroe(): void {
    // this.router.navigate([
    //   'heroe',
    //   this.index
    // ])
    this.heroeSeleccionado.emit(this.index);

  }

  ngOnInit() {
  }

}
