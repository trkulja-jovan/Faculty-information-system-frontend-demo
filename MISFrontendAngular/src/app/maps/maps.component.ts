import { Component, OnInit } from '@angular/core';
import { Profesor } from 'app/classes/profesor';
import { ProfesorService } from 'app/services/profesor.service';
import { Predmet } from 'app/classes/predmet';
import { of, Observable } from 'rxjs';
import { Student } from 'app/classes/student';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
 
  private profesors : Profesor[];
  private predmets : Predmet[];
  private students : Student[];
  private prof : Profesor;

  private isDivVisible : boolean;

  private headerForStudent : string[];

  constructor(private profService : ProfesorService) { 

    this.headerForStudent = ["Ime", "Prezime", "Broj indeksa"];
  }

  ngOnInit() {
    this.profService.getProfesori().subscribe(data => this.profesors = data);

  }

  public getPredmets(idProfesor : number) {
    console.log(idProfesor);
    this.profService.getPredmetForProfesor(idProfesor).subscribe(data => this.predmets = data);
  }

  public pogledajStudente(idPredmet : number){

    this.profService.getStudentsForPredmet(idPredmet).subscribe(data => this.students = data);
    this.isDivVisible = true;
  }
}
