import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
     http:any;
     apiKey:String="5b6edb12ada22700";
     conditionUrl:String='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/'
     // use ionic proxy service to overcome CORS -rich searchUrl: String=" http://autocomplete.wunderground.com/aq?query="
      searchUrl: String="http://localhost:8100/search/aq?query="
     constructor(http:Http){
          this.http=http;

     }
     getWeather(zmw){
          return this.http.get(this.conditionUrl + '/zmw:' + zmw + '.json')
               .map(res=> res.json());
     }
     searchCities(searchStr){
          return this.http.get(this.searchUrl + searchStr)
               .map(res=> res.json());
     }
}

