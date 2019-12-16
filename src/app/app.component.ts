import { Component, Output } from '@angular/core';
import { IPlace, IWeather, ISocial } from 'src/mock/itemsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PlacesHW';

  @Output()
  public weather: IWeather;

  @Output()
  public social: ISocial;

  initWeatherSocial(place: IPlace): void {
    this.weather = place.weather; 
    this.social = place.social_info;
  }    
}