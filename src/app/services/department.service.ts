import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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
    let token = localStorage.getItem("jwt");
    console.log('Token: '+token);
    return this.http.get<Department[]>(this.apiUrl,{
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
      })
    })
    .pipe(catchError(this.handleError));
  }

  getDeptDetails(id: number):Observable<Department>{
    return this.http.get<Department>(this.apiUrl+'/'+id).pipe(catchError(this.handleError));
  }

  addDept(dept: Department):Observable<void>{
    return this.http.post<void>(this.apiUrl,dept).pipe(catchError(this.handleError));
  }

  updateDept(dept: Department):Observable<void>{
    return this.http.put<void>(this.apiUrl+'/'+dept.PKDeptId,dept).pipe(catchError(this.handleError));
  }

  deleteDept(id: number):Observable<void>{
    return this.http.delete<void>(this.apiUrl+'/'+id).pipe(catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse){
    return throwError(error);
  }
}
