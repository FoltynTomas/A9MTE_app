import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';

// Zone for updating UI
import { NgZone } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private weatherResponse;

  constructor(public navCtrl: NavController, private weather: RestProvider, private storage: StorageProvider) {
    var settings = this.storage.getSettings();
    var place = settings[0];
    var units = settings[1];

    
    if (place && units)
    {
      console.log(place);
    }

    // pass text for translation to translation service
    //this.weather.getWeather(this.place).subscribe( (result) => {
      // could be run outside of this NgZone, run it always inside, for refresh UI
        //this.weatherResponse = result;
        //console.log(this.weatherResponse);
      //});
  }

}
