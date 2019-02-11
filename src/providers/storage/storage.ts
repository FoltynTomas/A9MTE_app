import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  setSettings(place, units)
  {  
    this.storage.set('place', place);
    //this.storage.set('country', country);
    this.storage.set('units', units);
  }

  getSettings() : any
  {
    var place = this.storage.get('place');
    var units = this.storage.get('units');
    return [place, units];
  }

  setLastWeather(weather)
  {
    this.storage.set('lastWeather', weather);
  }

  gerLastWeather() : any
  {
    return this.storage.get('lastWeather');
  }
}
