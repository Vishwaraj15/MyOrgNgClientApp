import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Department } from '../models/department.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit, OnDestroy {

  private errorMessage: string;
  private _depts: Department[];
  private dept: Department = new Department();
  private dataFromChild: number;

  constructor(private router: Router, private route: ActivatedRoute, private deptService: DepartmentService) {
    //this._depts = this.route.snapshot.data['depts'];
    //console.log(this._depts);
    
  }

  ngOnInit() {
    console.log('oninit');
    this.getDepts();
  }

  ngOnDestroy() {
  }


  getDepts(): void {
    this.deptService.getDepartments().subscribe((data) => {
      console.log('---data from service---');
      this._depts = data;
      console.log(data);
    },
      (err: any) => {
        console.log(err);
        this.errorMessage = err.statusText;
      });
  }

  getDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  delete(deptData:any){
    this.dept = <Department>deptData;
    console.log(this.dept);
    document.getElementById("openModalButton").click();
    
  }

  handleEvent(id:number){
    this.dataFromChild = id;
    this.deptService.deleteDept(this.dataFromChild).subscribe((data) => {
      console.log('---Successfully deleted---');
      document.getElementById("openModalButton").click();
      console.log(data);
      this.getDepts();
    },
      (err: any) => {
        console.log(err);
        this.errorMessage = err.statusText;
      });
  }

}
