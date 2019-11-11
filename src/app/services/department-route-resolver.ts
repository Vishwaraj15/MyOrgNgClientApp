import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';
import { DepartmentService } from './department.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentRouteResolver implements Resolve<Department[]> {
    private _objSub:any;
    constructor(private deptService: DepartmentService) {
        
      }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Department[]> {
        return this.deptService.getDepartments();
    }
}
