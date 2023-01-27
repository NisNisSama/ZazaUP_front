import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ExperienceModel } from "../models/experience.model";

@Injectable()
export class ExperiencesService {
    constructor(
        private http: HttpClient
    ) {}

    private _loading$ = new BehaviorSubject<boolean>(false);
    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }

    private _experiences$ = new BehaviorSubject<ExperienceModel[]>([]);
    get experiences$(): Observable<ExperienceModel[]> {
        return this._experiences$.asObservable();
    }

    lastExperiencesLoaded = 0;

    getExperiences(): void {
        if(Date.now() - this.lastExperiencesLoaded <= 180000) return;
        this.setLoadingStatus(true);
        this.http.get<ExperienceModel[]>(`${environment.apiUrl}/experiences`).pipe(
            tap(experiences => {
                this.lastExperiencesLoaded = Date.now();
                this._experiences$.next(experiences);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }
}
