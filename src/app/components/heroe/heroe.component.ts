import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(
    private _heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        res => {
          const id = Number(res['id'])
          this.heroe = this._heroService.getHeroe(id);   
         
            
        },
        err => {
          console.log(err);
        }
      )

  }

  regresar():void{
    this.router.navigate(['/heroes']);
  }

 

}
