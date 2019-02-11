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

  public saveClick(tText:string)
  {
    console.log(tText);
    this.storage.setSettings(tText, this.radioValue);
  }

  public radioChanged(radioVal)
  {
    console.log(radioVal);
    this.radioValue = radioVal;
  }
}
