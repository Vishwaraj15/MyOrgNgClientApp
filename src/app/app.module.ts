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
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from './auth-guard';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:55684"],
        blacklistedRoutes: []
      }
    })
  ],
  providers:[DepartmentRouteResolver,AuthGuard],
  //providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
