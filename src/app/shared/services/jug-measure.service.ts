import { MeasureModel } from '../models/measure-model';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { JugActionModel } from '../models/jugAction-model';
import { environment } from '../../../environments/environment';
@Injectable()
export class JugMeasureService {

  constructor(private http: Http) { }
  public  measure(measureModel : MeasureModel) : Observable<JugActionModel[]>
  {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var postUrl = environment.apiUrl + "/api/jugMeasure/measure";
      return this.http.post(postUrl, JSON.stringify(measureModel), { headers })      
                  .map(response => response.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public  reverseMeasure(measureModel : MeasureModel) : Observable<JugActionModel[]>
  {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var postUrl = environment.apiUrl + "/api/jugMeasure/reverseMeasure";
      return this.http.post(postUrl, JSON.stringify(measureModel), { headers })      
                  .map(response => response.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
