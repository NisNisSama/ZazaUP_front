import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthModel, CreateEtudiantsModel } from "../models/auth.model";

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) {}

    logIn(donnees: AuthModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/login/`, donnees, {observe: 'body'});
    }

    signup(donnees: CreateEtudiantsModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/create/parents`, donnees, {observe: 'body'});
    }
}
