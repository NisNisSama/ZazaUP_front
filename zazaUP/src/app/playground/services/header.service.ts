import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class HeaderService {
    constructor(
        private http: HttpClient
    ) {}
    
    private getId(): number {
        return +!localStorage.getItem('zazaup_enfants_id');
    }

    private getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    requestInfo():Observable<any> {
        return this.http.get(`${environment.apiUrl}/user/${this.getId()}`,
        { 
            headers: {
                'Authorization': `Bearer ${this.getToken()}`
            }
        });
    }
}