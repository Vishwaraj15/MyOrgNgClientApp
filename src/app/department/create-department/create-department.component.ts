import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Router} from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styles: []
})
export class CreateDepartmentComponent implements OnInit {

  dept : Department = {
    DeptName : '',
    PKDeptId : 0,
    IsActive : false
  };

  constructor(private router: Router, private deptService: DepartmentService) { }

  ngOnInit() {
  }

  create(){
    this.deptService.addDept(this.dept).subscribe();
    console.log(this.dept);
    ///this.router.navigateByUrl('/department');
    this.redirectTo('/department');
  }

  
  redirectTo(uri:string){
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
}
