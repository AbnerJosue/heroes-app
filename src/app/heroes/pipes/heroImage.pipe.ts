import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroImage',
  standalone: false,
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if( !hero.id && !hero.alt_img ){
      return '/no-image.png';
    }

    if( hero.alt_img) return hero.alt_img;
    
    return `heroes/${ hero.id }.jpg`;
    
  }
}
