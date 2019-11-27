import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input()
  private dept: Department = new Department();
  
  @Output()
  childEvent : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit(this.dept.PKDeptId);
  }

}
