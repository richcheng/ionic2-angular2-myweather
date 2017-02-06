import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
  http:any;
  headers:any;
  apiKey:String="5b6edb12ada22700";
  conditionUrl:String='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';


  //searchUrl:String=" http://autocomplete.wunderground.com/aq?query=";
  // use ionic proxy service to overcome CORS -rich searchUrl
  searchUrl: String="http://localhost:8100/search/aq?query="
  //searchUrl: String="http://myweather.richcheng.com/search/aq?query="; //hosted on goDaddy
  constructor(http:Http){
      this.http=http;
  }

  getWeather(zmw){
      return this.http.get(this.conditionUrl + '/zmw:' + zmw + '.json')
            .map(res=> res.json());
  }
  searchCities(searchStr){
      this.headers = new Headers();
      // this.headers.append('Content-Type', 'application/json');
      //this.headers.append('Access-Control-Allow-Origin', '*');    
      return this.http.get(this.searchUrl + searchStr, {headers: this.headers})
            .map(res=> res.json());
  }
}

