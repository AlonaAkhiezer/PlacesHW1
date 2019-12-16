import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { PhonePipe } from './phone.pipe';
import { PlacesFilterPipe } from './places-filter.pipe';
import { PlacetypePipe } from './placetype.pipe';
import { PlacesListComponent } from './places-list/places-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    WeatherComponent,
    SocialComponent,
    PhonePipe,
    PlacesFilterPipe,
    PlacetypePipe,
    PlacesListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlacesFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }