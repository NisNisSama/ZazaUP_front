import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ProjetModel } from "../models/projet.model";

@Injectable()
export class ProjectsService {
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
    
    private _projets$ = new BehaviorSubject<ProjetModel[]>([]);
    get projets$(): Observable<ProjetModel[]> {
        return this._projets$.asObservable();
    }

    lastProjetsLoaded = 0;

    getProjets(): void {
        if(Date.now() - this.lastProjetsLoaded <= 300000) return;
        this.setLoadingStatus(true);
        this.http.get<ProjetModel[]>(`${environment.apiUrl}/projets`).pipe(
            tap(projets => {
                this.lastProjetsLoaded = Date.now();
                this._projets$.next(projets);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }
}
