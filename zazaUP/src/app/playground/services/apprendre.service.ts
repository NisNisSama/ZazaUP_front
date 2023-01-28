import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DataRequestModel } from "../models/question.model";

@Injectable()
export class ApprendreService {
    constructor(
        private http: HttpClient
    ) {}

    private getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    requestDecouverte(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/course/`,
            {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                },
                observe: 'body'
            }
        );
    }
}