import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AccueilService {
    constructor(
        private http: HttpClient
    ) {}

    getId(): string | null {
        return localStorage.getItem('zazaUp_parents_id');
    }

    getInfo(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/user/${this.getId()}`);
    }
}
