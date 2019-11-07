import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { Department } from '../models/department.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl : string = environment.apiURL+'departments';

  constructor(private http: HttpClient, private router: Router) {
    
   }

  getDepartments(): Observable<Department[]> {
    console.log('hi from dpts');
    return this.http.get<Department[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getDeptDetails(id: number):Observable<Department>{
    return this.http.get<Department>(this.apiUrl+'/'+id);
  }

  addDept(dept: Department):Observable<void>{
    return this.http.post<void>(this.apiUrl,dept);
  }

  private handleError(error:HttpErrorResponse){
    return throwError(error);
  }
}
