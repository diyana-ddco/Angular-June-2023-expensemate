import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

export function authRoutGuard() {
    return () => {
        const router = inject(Router);
        const authService = inject(AuthService);
        console.log("authRoutGuard isAuthenticated: " + authService.isAuthenticated());
        return authService.isAuthenticated() || router.navigate(['/authentication/logout']);
    }
}