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

  public savePrijava(idStudent : number, idPredmet : number) : Observable<boolean>{

    return this.http.get<boolean>(this.baseUrl + "/prijaviIspit?idStudent=1&idPredmet=" + idPredmet);
  }

  public getPrijavljeni() : Observable<Ispit[]>{
    return this.http.get<Ispit[]>(this.baseUrl + "/getPrijavljeniIspiti?idStudent=1");
  }

  public getPolozeni() : Observable<Ispit[]> {
    return this.http.get<Ispit[]>(this.baseUrl + "/getPolozeni?idStudent=1");
  }
}
