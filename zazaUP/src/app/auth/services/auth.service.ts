import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthModel, CreateEtudiantsModel, 
    DomaineCompetencesModel, FilieresModel, 
    PromotionsModel, RegionsModel, 
    StatusProfessionnelsModel } from "../models/auth.model";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    logIn(donnees: AuthModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/auth/etudiants`,
            donnees, { observe: 'body' }
        );
    }

    signUp(donnees: CreateEtudiantsModel): Observable<any> {
        return this.http.post(`${environment.apiUrl}/etudiants/create`,
            donnees, {observe: 'body'}
        );
    }

    // ==================== SERVICES FOR GETTING MORE THINGS ====================
    findAllPromotions(): Observable<PromotionsModel[]> {
        return this.http.get<PromotionsModel[]>(`${environment.apiUrl}/promotions/all`);
    }

    findAllRegions(): Observable<RegionsModel[]> {
        return this.http.get<RegionsModel[]>(`${environment.apiUrl}/regions/all`);
    }

    findAllDomaineCompetences(): Observable<DomaineCompetencesModel[]> {
        return this.http.get<DomaineCompetencesModel[]>(`${environment.apiUrl}/domaine-competences/all`);
    }

    findAllFilieres(): Observable<FilieresModel[]> {
        return this.http.get<FilieresModel[]>(`${environment.apiUrl}/filieres/all`);
    }

    findAllStatusProfessionnels(): Observable<StatusProfessionnelsModel[]> {
        return this.http.get<StatusProfessionnelsModel[]>(`${environment.apiUrl}/status-professionnels/all`)
    }
}
