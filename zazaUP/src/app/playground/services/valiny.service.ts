import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ValinyService {
    constructor(
        private http: HttpClient
    ) {}

    private getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    requestDecouverte(): Observable<any> {
        /* return this.http.get(`${environment.apiUrl}/quizz`,
            {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                },
                observe: 'body'
            }
        ); */
        return of({text: "Combien de doigt a-t-on sur la main?", answers: [{text: '4', is_correct: false}, {text: '3', is_correct: false}, {text: '1', is_correct: false}, {text: '5', is_correct: true}]})
    }
}
