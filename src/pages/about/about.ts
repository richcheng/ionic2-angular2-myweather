import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface AboutItem {
  name:string;
  url:string;
}

const aboutItems:AboutItem[] = [
      {
        'name':'Ionic 2',
        'url':'	2. http://ionic.io/2'
      },
      {
        'name':'NodeJs',
        'url':'https://nodejs.org/en/'
      },
      {
        'name':'Angular 2',
        'url':'https://angular.io'
      },
      {
        'name':'wunderground api',
        'url':'https://wunderground.com/weather/api'
      },
      {
        'name':'store settings in localStorage',
        'url':''
      }          
  ]; 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {  
  constructor(
  public navCtrl: NavController) {
    
  }
}
