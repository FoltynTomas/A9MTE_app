import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private units:string;

  private temp6:string;
  private temp12:string;
  private temp24:string;
  private temp48:string;

  private img6Url:string;
  private img12Url:string;
  private img24Url:string;
  private img48Url:string;

  constructor(public navCtrl: NavController, private weather: RestProvider, private storage: StorageProvider) {
    this.storage.getUnits().then(val => {
      if(val)
      {
        this.units = val;
      }
    });

    this.storage.getPlace().then(place => {
      console.log(place);
      if(place)
      {
        this.weather.getForecast(place).subscribe( (result) => {
          console.log(result);
          this.PopulateForm(result);
        });  
      }
    });
  }

  public PopulateForm(forecast)
  {
    var imgUrlStart = "http://openweathermap.org/img/w/";
    var imgUrlEnd =  ".png";

    this.temp6 = this.GetRealTemp(forecast.list[1].main.temp);
    this.img6Url = imgUrlStart + forecast.list[1].weather[0].icon + imgUrlEnd;

    this.temp12 = this.GetRealTemp(forecast.list[3].main.temp);
    this.img12Url = imgUrlStart + forecast.list[3].weather[0].icon + imgUrlEnd;

    this.temp24 = this.GetRealTemp(forecast.list[7].main.temp);
    this.img24Url = imgUrlStart + forecast.list[7].weather[0].icon + imgUrlEnd;

    this.temp48 = this.GetRealTemp(forecast.list[15].main.temp);
    this.img48Url = imgUrlStart + forecast.list[15].weather[0].icon + imgUrlEnd;
  }

  public GetRealTemp(temp)
  {
    if (this.units == "celsius")
    {
      var celsius = temp - 273.15;
      return celsius.toFixed(1) + "°C";
    }
    else if (this.units == "fahrenheit")
    {
      var fahrenheit = temp * (9/5) - 459.67;
      return fahrenheit.toFixed(1) + "°F";
    }
    else
    {
      return temp.toFixed(1) + "K";
    }
  }
}
