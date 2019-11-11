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
  private depts: Department[];
  private _deptSub = Subscription.EMPTY;

  constructor(private router: Router, private route: ActivatedRoute, private deptService: DepartmentService) {
    //this.depts = this.route.snapshot.data['depts'];
    // this._deptSub = route.data.subscribe((data) => {
    //   this.depts = data['depts'];
    // });
    console.log(this.depts);
  }

  ngOnInit() {
    console.log('oninit');
    this.getDepts();
  }

  ngOnDestroy() {
    this._deptSub.unsubscribe();
    console.log('Destroyed');
  }


  getDepts(): void {
    this._deptSub = this.deptService.getDepartments().subscribe((data) => {
      console.log('---data---');
      this.depts = data;
      console.log(data);
    },
      (err: any) => {
        console.log(err);
        this.errorMessage = err.statusText;
      });
  }

  onGetDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  onGoCreate() {
    alert('Hi Create');
    this.router.navigate(['department/create']);
  }
}
