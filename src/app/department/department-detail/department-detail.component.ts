import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  deptId: number;
  dept: Department;

  constructor(private route: ActivatedRoute,private router: Router, private deptService: DepartmentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.deptId = parseInt(params.get('id'));
      this.deptService.getDeptDetails(this.deptId).subscribe(data=>{
        this.dept=data;
        console.log(data);
      });
    })
  }

  onGoBack(id:number|null){
    this.router.navigate(['department']);
  }

}
