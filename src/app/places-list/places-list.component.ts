import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { IPlace, places, IWeather, ISocial } from 'src/mock/itemsData';
import { PlacesFilterPipe } from '../places-filter.pipe';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  public places: IPlace[] = places;
  
  @Output() placeSelected: EventEmitter<IPlace> = new EventEmitter();

  public currentPlace: IPlace;

  public placesTypes: string[];

  public selectedType:string;

  constructor(
    private placesFilter: PlacesFilterPipe
  ){  }

  public ngOnInit(){    
    this.initPlacesTypes();
    this.selectPlace(this.placesFilter.transform(places, this.selectedType)[0]);
  }
 
  selectPlace(place: IPlace): void {
    this.currentPlace = place;
    this.placeSelected.emit(place);
  }

  initPlacesTypes(): void{
    this.placesTypes = places.map(x => x.type);
    this.placesTypes = this.placesTypes.filter((v,i) => this.placesTypes.indexOf(v) === i);
    this.selectedType = this.placesTypes[0];
  }

  selectType(type: string): void{  
    this.selectedType = type;
    this.selectPlace(this.placesFilter.transform(places, this.selectedType)[0]);
  }  
}