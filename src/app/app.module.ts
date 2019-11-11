import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './global-error-handler';
import {FormsModule} from '@angular/forms';
import { CustomRouteReuseStategy } from './custom-route-reuse-stategy';
import { RouteReuseStrategy } from '@angular/router';
import { DepartmentRouteResolver } from './services/department-route-resolver';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[DepartmentRouteResolver],
  //providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
