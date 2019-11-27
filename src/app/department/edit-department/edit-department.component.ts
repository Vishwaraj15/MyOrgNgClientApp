import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  private dept: Department = new Department();
  private deptId: number;
  
  constructor(private route: ActivatedRoute,private router: Router, private deptService: DepartmentService) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.deptId = parseInt(params.get('id'));
      this.deptService.getDeptDetails(this.deptId).subscribe(data=>{
        this.dept=data;
        console.log(data);
      });
    })
  }

  update() {
    this.deptService.updateDept(this.dept).subscribe((data) => {
        console.log('Updated');
        this.router.navigate(['department']);
      },
      (error) => {
        alert('Error occurred!');
      });
  }

}
