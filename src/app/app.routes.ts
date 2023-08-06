import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./core/auth-layout/auth-layout.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

export const APP_ROUTES: Routes = [
    {
        path: 'authentication',
        component: AuthLayoutComponent,
        children: AUTH_ROUTES
    },
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full' 
    }
]