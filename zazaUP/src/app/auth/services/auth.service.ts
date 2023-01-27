import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthModel, CreateEtudiantsModel } from "../models/auth.model";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    logIn(donnees: AuthModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/login/`,
            donnees, { observe: 'body' }
        );
    }

    signUp(donnees: CreateEtudiantsModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/create/`,
            donnees, {observe: 'body'}
        );
    }
}
