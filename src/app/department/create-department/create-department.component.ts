import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styles: []
})
export class CreateDepartmentComponent implements OnInit {

  private dept: Department = {
    DeptName: '',
    PKDeptId: 0,
    IsActive: false
  };

  constructor(private router: Router, private deptService: DepartmentService) { }

  ngOnInit() {
  }

  create() {
    this.deptService.addDept(this.dept).subscribe((data) => {
        console.log('Created');
        console.log(data);
        this.router.navigate(['department']);
      },
      (error) => {
        alert('Error occurred!');
      });
  }
}
