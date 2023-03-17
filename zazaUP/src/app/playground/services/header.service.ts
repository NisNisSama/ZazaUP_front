import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class HeaderService {
    constructor(
        private http: HttpClient
    ) {}
    
    private getId(): string | null {                
        return localStorage.getItem('zazaup_enfants_id');
    }

    private getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    requestInfo():Observable<any> {
        return of({username: 'Visitor'});
    }
}