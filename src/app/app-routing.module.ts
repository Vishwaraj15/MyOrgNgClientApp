import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DepartmentRouteResolver } from './services/department-route-resolver';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch:'full'},
  {path:'department', component: DepartmentComponent,canActivate: [AuthGuard]},
  //{path:'department', component: DepartmentComponent,resolve:{depts:DepartmentRouteResolver},canActivate: [AuthGuard] },
  {path:'department/create', component: CreateDepartmentComponent,pathMatch:'full'},
  {path:'department/edit/:id', component: EditDepartmentComponent},
  {path:'department/:id', component: DepartmentDetailComponent},
  
  {path:'employee', component: EmployeeComponent},
  {path:'employee/:id', component: EmployeeDetailComponent},
  {path:'create-employee', component: CreateEmployeeComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,DepartmentComponent,DepartmentDetailComponent,CreateDepartmentComponent,EditDepartmentComponent,
  EmployeeComponent,EmployeeDetailComponent,CreateEmployeeComponent,PageNotFoundComponent
];


