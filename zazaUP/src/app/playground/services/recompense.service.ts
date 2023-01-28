import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class RecompenseService {
    constructor(
        private http: HttpClient
    ) {}

    private getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    requestAnimes(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/anime/`,
            {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                },
                observe: 'body'
            }
        );
    }
}
