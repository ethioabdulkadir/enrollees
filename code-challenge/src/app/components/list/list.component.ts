import { Component, OnInit } from '@angular/core';
import { EnroleeService } from 'src/app/services/enrolee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private enroleeService: EnroleeService) { }

  enrollees: Array<any> = [];

  ngOnInit(): void {
    this.populateEnrollees();
  }

  populateEnrollees() {
    this.enroleeService.listRequest().subscribe(
      enrollees => this.enrollees = enrollees
    );
  }
}
