import { Component, OnInit } from "@angular/core";
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroeService:HeroesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  buscarHeroe(miHeroe:any):void{
    console.log('buscador');
    
    this.router.navigate(['/heroes',miHeroe]);
    // this._heroeService.searchHeroe(miHeroe);
  }

}
