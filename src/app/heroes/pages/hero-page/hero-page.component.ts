import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroesService: HeroesService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.
    pipe(
      switchMap( ({id}) => this.heroesService.getHeroById(id) ),
    ).subscribe( hero => {
      if( !hero ) return this.router.navigate(['/heroes/list']);

      this.hero = hero;
      console.log({ hero });
      return; 
    });
  }


  goBack(){
    this.router.navigate(['/heroes/list']);
  }

}
