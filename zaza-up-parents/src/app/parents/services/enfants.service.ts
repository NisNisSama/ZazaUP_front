import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EnfantsModel } from "../models/enfants.model";

@Injectable()
export class enfantsService {
    constructor(
        private http: HttpClient
    ) {}

    getEnfants(): Observable<EnfantsModel[]> {
        return this.http.get<EnfantsModel[]>(`${environment.apiUrl}/enfants`);
    }
}