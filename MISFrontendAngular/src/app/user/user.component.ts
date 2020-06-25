import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Student } from 'app/classes/student';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private student : Student;

  constructor(public service : UserService) { 
    service.getStudentInfo().subscribe(data => this.student = data);
  }

  ngOnInit() {
  }

}
