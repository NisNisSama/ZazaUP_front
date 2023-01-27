import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DataRequestModel } from "../models/question.model";

@Injectable()
export class QuestionService {
    constructor(
        private http: HttpClient
    ) {}

    requestCompletion(data: string): Observable<any> {
        const token = "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";
        const donnees: DataRequestModel = {
            model: 'text-davinci-003',
            prompt: data,
            temperature: 0.31,
            max_tokens: 101,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [".?!,;"]
        };
        return this.http.post(`${environment.apiopenai}/completions`, 
            donnees,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`
                },
                observe: 'response'
            }
        );
    }
}
