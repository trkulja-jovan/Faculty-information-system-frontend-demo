import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'app/classes/student';
import { Predmet } from 'app/classes/predmet';
import { Prijava } from 'app/classes/prijava';
import { Ispit } from 'app/classes/ispit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredmetiService {

  private baseUrl = "http://localhost:8080";
  private uspesnaPrijava : boolean;

  constructor(private http : HttpClient) { 
  }

  public savePrijava(student : Student, predmet : Predmet) : Observable<Ispit>{

    var ispit = new Ispit(0, new Date(), predmet, student);

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(ispit);

    return this.http.post<Ispit>(this.baseUrl + "/prijaviIspit",body, {
      'headers' : headers
    });
  }

  public getPrijavljeni() : Observable<Ispit[]>{
    return this.http.get<Ispit[]>(this.baseUrl + "/getPrijavljeniIspiti?idStudent=1");
  }

  public getPolozeni() : Observable<Ispit[]> {
    return this.http.get<Ispit[]>(this.baseUrl + "/getPolozeni?idStudent=1");
  }
}
