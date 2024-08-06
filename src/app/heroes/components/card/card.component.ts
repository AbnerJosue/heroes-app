import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'heroes-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if( !this.hero ) throw Error('Hero property is required')
  }

}
