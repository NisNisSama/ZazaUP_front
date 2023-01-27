import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { FormationModel } from "../models/formation.model";

@Injectable()
export class FormationsService {
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

    private _formations$ = new BehaviorSubject<FormationModel[]>([]);
    get formations$(): Observable<FormationModel[]> {
        return this._formations$.asObservable();
    }

    lastFormationsLoaded = 0;

    getFormations(): void {
        if(Date.now() - this.lastFormationsLoaded <= 300000) return;
        this.setLoadingStatus(true);
        this.http.get<FormationModel[]>(`${environment.apiUrl}/formations`).pipe(
            tap(formations => {
                this.lastFormationsLoaded = Date.now();
                this._formations$.next(formations);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    deleteFormation(id: number): void {
        this.setLoadingStatus(true);
        this.http.delete(`${environment.apiUrl}/formations/delete/${id}`);
    }
}
