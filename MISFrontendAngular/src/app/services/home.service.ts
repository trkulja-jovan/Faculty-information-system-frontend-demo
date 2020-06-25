import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predmet } from 'app/classes/predmet';
import { PredProf } from 'app/classes/pred-prof';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = "http://localhost:8080";

  
  constructor(private httpClient : HttpClient) { 

  }

  public getSubjects() : Observable<PredProf[]>{
    
    return this.httpClient.get<PredProf[]>(this.baseUrl + "/getPredmets?idStudent=1");

  }
}
