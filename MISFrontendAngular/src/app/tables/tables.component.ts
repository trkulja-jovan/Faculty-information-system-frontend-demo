import { Component, OnInit } from '@angular/core';
import { HomeService } from 'app/services/home.service';
import { Predmet } from 'app/classes/predmet';
import { PredmetiService } from 'app/services/predmeti.service';
import { PredProf } from 'app/classes/pred-prof';
import { UserService } from 'app/services/user.service';
import { Student } from 'app/classes/student';
import { Ispit } from 'app/classes/ispit';
import { timingSafeEqual } from 'crypto';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    private subjects : PredProf[];
    private ispits : Ispit[];
    private polozeni : Ispit[];
    private header : string[];
    private headerForPrijava : string[];
    private headerForPolozeni : string[];
    private student : Student;
    private predmet : Predmet;

    private ispit : Ispit;

    constructor(public homeServ : HomeService, public predServ : PredmetiService, public userServ : UserService) { 
        
        this.header = ["Naziv predmeta", "Broj espb", "Semestar", "Profesor"];
        this.headerForPrijava = ["Naziv predmeta", "Rok", "Ispit prijavljen"];
        this.headerForPolozeni = ["Naziv predmeta", "Ocena", "Datum polaganja", "Predmet položen"];
    }

    ngOnInit() {
        this.homeServ.getSubjects().subscribe(data => this.subjects = data);
        this.userServ.getStudentInfo().subscribe(data => this.student = data);
        this.predServ.getPrijavljeni().subscribe(data => this.ispits = data);
        this.predServ.getPolozeni().subscribe(data => this.polozeni = data);
    }

    public async prijaviIspit(idStudent : number, nazivPredmeta : string) {
        if(confirm("Da li ste sigurni da želite da prijavite ispit za " + nazivPredmeta + "?")){
            this.subjects.forEach(elem => {
                if(elem.pred.nazivPredmeta == nazivPredmeta){
                    this.predmet = elem.pred;
                }
            });
            await this.predServ.savePrijava(this.student, this.predmet).subscribe(data => this.ispit = data);
            this.predServ.getPrijavljeni().subscribe(data => this.ispits = data);
        } 
    }

}
