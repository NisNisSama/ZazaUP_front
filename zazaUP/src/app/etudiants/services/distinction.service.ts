import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { DistinctionModel } from "../models/distinction.model";

@Injectable()
export class DistinctionsService {
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

    private _distinctions$ = new BehaviorSubject<DistinctionModel[]>([]);
    get distinctions$(): Observable<DistinctionModel[]> {
        return this._distinctions$.asObservable();
    }

    lastDistinctionsLoaded = 0;

    getDistinctions(): void {
        if(Date.now() - this.lastDistinctionsLoaded <= 180000) return;
        this.setLoadingStatus(true);
        this.http.get<DistinctionModel[]>(`${environment.apiUrl}/distinctions`).pipe(
            tap(distinctions => {
                this.lastDistinctionsLoaded = Date.now();
                this._distinctions$.next(distinctions);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }
}
