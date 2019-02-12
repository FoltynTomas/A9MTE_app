import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private city:string = "";
  private weatherText:string = "";
  private temp:string;
  private pressure:string;
  private humidity:string;
  private imgUrl:string;

  private units:string = "";
  private place:string = "";

  constructor(public navCtrl: NavController, private weather: RestProvider, private storage: StorageProvider) {
    // this.storage.getUnits().then(val => {
    //   if(val)
    //   {
    //     this.units = val;
    //     this.storage.getLastWeather().then(val => {     
    //       if(val)
    //       {
    //         //console.log(val);  
    //         this.PopulateForm(val);
    //       }      
    //     });
    //   }
    // });

    // this.storage.getPlace().then(place => {
    //   if(place)
    //   {
    //     this.place = place;
    //     this.weather.getWeather(place).subscribe( (result) => {
    //       //console.log(result);
    //       this.storage.setLastWeather(result);
    //       this.PopulateForm(result);
    //     });  
    //   }
    // });
  }

  ionViewWillEnter()
  {
    this.storage.getPlace().then(place => {
      if(place)
      {
        if (place != this.place)
        {
          this.place = place;
          // this.weather.getWeather(place).subscribe( (result) => {
          //   //console.log(result);
          //   this.storage.setLastWeather(result);
          //   this.PopulateForm(result);
          // });    
        }
      }
    });

    this.storage.getUnits().then(val => {
      if(val)
      {
        if (val != this.units)
        {
          this.units = val;
          this.storage.getLastWeather().then(val => {     
            if(val)
            {
              //console.log(val);  
              this.PopulateForm(val);
            }      
          });  
        }
      }
    });
  }

  public PopulateForm(actualweather)
  {
    this.city = actualweather.name;
    this.weatherText = actualweather.weather[0].description;
    this.temp = this.GetRealTemp(actualweather.main.temp);
    this.pressure = actualweather.main.pressure + " hPA";
    this.humidity = actualweather.main.humidity + "%";    
    this.imgUrl = "http://openweathermap.org/img/w/" + actualweather.weather[0].icon + ".png";
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
