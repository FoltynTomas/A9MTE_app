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

  setSettings(place:string, units:string)
  {  
    this.storage.set('place', place);
    //this.storage.set('country', country);
    this.storage.set('units', units);
  }

  getPlace() : Promise<string>
  {
    return this.storage.get('place');
  }

  getUnits() : Promise<string>
  {
    return this.storage.get('units');
  }

  setLastWeather(weather)
  {
    this.storage.set('lastWeather', weather);
  }

  getLastWeather() : Promise<any>
  {
    return this.storage.get('lastWeather');
  }
}
