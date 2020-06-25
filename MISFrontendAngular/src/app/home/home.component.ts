import { Component, OnInit } from '@angular/core';
import { HomeService } from 'app/services/home.service';
import { Predmet } from 'app/classes/predmet';
import { PredProf } from 'app/classes/pred-prof';
import { Profesor } from 'app/classes/profesor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public subjects : PredProf[];

  public isDivVisible : boolean;

  public prof : Profesor;
  public pred : Predmet;
  public value : string;
    
  constructor(public service: HomeService) { 

    this.service.getSubjects().subscribe(data => this.subjects = data);
    this.isDivVisible = false;
  }

  ngOnInit() { }

  public seeDetails(idPredmet : number, idProfesor : number){
    this.isDivVisible = true;

    this.subjects.forEach(element => {
      if(element.prof.idProfesor == idProfesor && element.pred.idPredmet == idPredmet){
        this.prof = element.prof;
        this.pred = element.pred;
      }
    });
  }

}
