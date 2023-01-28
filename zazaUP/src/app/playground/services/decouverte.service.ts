import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DecouverteService {
    constructor(
        private http: HttpClient
    ) {}

    requestDecouverte(): Observable<any> {
        const token = "Bc+1U4rdw3Ed7OGWhbo2dA==l4vTGaWATyMiifWH";
        return this.http.get('https://api.api-ninjas.com/v1/facts?limit=1', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': token
                },
                observe: 'response'
            }
        );
    }
}
