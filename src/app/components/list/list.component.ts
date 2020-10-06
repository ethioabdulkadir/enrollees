import { Component, OnInit } from '@angular/core';
import { EnroleeService } from 'src/app/services/enrolee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * Inject the Enrolee service that can handle the API related tasks
   * @param enroleeService 
   */
  constructor(private enroleeService: EnroleeService) { }

  /**
   * All the enrolles that will be listed
   */
  enrollees: Array<any> = [];

  /**
   * At a given time, enrollee to edited.
   */
  currentEnrollee = null;

  ngOnInit(): void {
    this.getEnrollees();
  }

  /**
   * Event handler for updating the enrollee's name and status
   */
  update() {
    this.enroleeService.update(this.currentEnrollee).subscribe( 
      response => console.log(response)
    );
  }

  /**
   * Check if enrollee is editable or not
   * @param enrollee 
   */
  isEditable(enrollee) {
    return this.currentEnrollee != null && enrollee.id == this.currentEnrollee.id;
  }

  /**
   * Switch enrollee to be editable for updating name and status
   * @param enrollee 
   */
  allowEdit(enrollee) {
    this.currentEnrollee = enrollee;
  }

  cancel() {
    this.currentEnrollee = null;
  }

  /**
   * Fetch all the enrollees to be listed.
   */
  getEnrollees() {
    this.enroleeService.list().subscribe(
      enrollees => this.enrollees = enrollees
    );
  }
}
