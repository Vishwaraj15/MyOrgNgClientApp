import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router, RouteReuseStrategy,ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit {
  
  errorMessage : string;
  depts: Department[];

  constructor(private router: Router, private route: ActivatedRoute, private deptService: DepartmentService) {
    this.routeEvent(this.router);
  }
   
  ngOnInit() {
    console.log('oninit');
    // this.router.routeReuseStrategy.shouldReuseRoute = function(){
    //   return false;
    // }
   //this.getDepts();
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.getDepts();
      }
    });
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
