import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private radioValue:string;

  constructor(public navCtrl: NavController, private storage: StorageProvider) {
  }

  public saveClick(pText:string)
  {
    //console.log(pText + ", " + this.radioValue);
    this.storage.setSettings(pText, this.radioValue);
  }

  public unitsChanged(value:string)
  {
    this.radioValue = value;
  }
}
