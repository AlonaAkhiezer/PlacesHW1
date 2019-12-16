import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from 'src/mock/itemsData';

@Pipe({
  name: 'placetype'
})
export class PlacetypePipe implements PipeTransform {

  transform(places: IPlace[]): string[] {

    return [...new Set(
      places.map(place => place.type)
    )];
  
  }
}
