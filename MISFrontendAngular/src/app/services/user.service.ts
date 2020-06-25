import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'app/classes/student';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080";

  constructor(public httpClient : HttpClient) { 

  }

  public getStudentInfo() : Observable<Student> {
    
    return this.httpClient.get<Student>(this.baseUrl + "/getStudentInfo?idStudent=1");
  }
}
