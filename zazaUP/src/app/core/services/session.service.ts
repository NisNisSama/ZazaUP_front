import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    constructor(
        private router: Router
    ) {}

    setToken(token: string, token_id: number): void {
        localStorage.setItem('zazaup_enfants', token);
        localStorage.setItem('zazaup_enfants_id', token_id.toString());
    }

    getToken(): string | null {
        return localStorage.getItem('zazaup_enfants');
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    logOut(): void {
        localStorage.removeItem('zazaup_enfants');
        this.router.navigateByUrl('/auth');
    }
}