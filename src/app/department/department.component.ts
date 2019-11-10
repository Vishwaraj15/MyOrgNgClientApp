import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router, RouteReuseStrategy,ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { Department } from '../models/department.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit,OnDestroy {
  
  private errorMessage : string;
  private depts: Department[];
  private _routerSub = Subscription.EMPTY;
  
  constructor(private router: Router, private route: ActivatedRoute, private deptService: DepartmentService) {
    this.routeEvent(this.router);
  }
   
  ngOnInit() {
    console.log('oninit');
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.getDepts();
      }
    });
  }

  ngOnDestroy(){
    this._routerSub.unsubscribe();
  }

  getDepts():void {
    this.deptService.getDepartments().subscribe((data) => {
      console.log('---data---');
      this.depts = data;
      console.log(data);
    },
    (err:any)=>{
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
