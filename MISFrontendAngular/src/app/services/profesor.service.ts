import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from 'app/classes/profesor';
import { Predmet } from 'app/classes/predmet';
import { Student } from 'app/classes/student';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  public getProfesori() : Observable<Profesor[]>{
    
    return this.http.get<Profesor[]>(this.baseUrl + "/getAllProfesors");

  }

  public getPredmetForProfesor(idProfesor : number) : Observable<Predmet[]>{
    
    return this.http.get<Predmet[]>(this.baseUrl + "/getPredmeti?idProfesor=" + idProfesor);
  }

  public getStudentsForPredmet(idPredmet : number) : Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl + "/getStudents?idPredmet=" + idPredmet);
  }
}
