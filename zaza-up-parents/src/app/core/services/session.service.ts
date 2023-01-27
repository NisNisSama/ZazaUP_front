import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    constructor(
        private router: Router
    ) { }

    setToken(token: string): void {
        localStorage.setItem('zazaUp_parents', token);
    }

    getToken(): string | null {
        return localStorage.getItem('zazaUp_parents');
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    logOut(): void {
        localStorage.removeItem('zazaUp_parents');
        this.router.navigateByUrl('/auth');
    }
}
