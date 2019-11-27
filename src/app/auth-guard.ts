import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtHelper: JwtHelperService, private router: Router) {
    }
    canActivate(): Promise<boolean> | boolean {
        return new Promise(resolve => {
            var token = localStorage.getItem("jwt");

            if (token && !this.jwtHelper.isTokenExpired(token)) {
                console.log(this.jwtHelper.decodeToken(token));
                return resolve(true);
            }
            this.router.navigate(["/"]);
            return resolve(false);
        })
    }

}