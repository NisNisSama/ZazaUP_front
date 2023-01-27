import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AproposModel } from "../models/apropos.model";

@Injectable()
export class AproposService {
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

    private _apropos$ = new BehaviorSubject<AproposModel>({});
    get apropos$(): Observable<AproposModel> {
        return this._apropos$.asObservable();
    }
}
