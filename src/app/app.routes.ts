import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./core/components/auth-layout/auth-layout.component";
import { AUTH_ROUTES, AUTH_ROUTES_TOKENS } from "./auth/auth.routes";
import { Page404Component } from "./core/components/page404/page404.component";
import { MainLayoutComponent } from "./core/components/main-layout/main-layout.component";
import { EXPENSES_ROUTES } from "./features/expenses/expenses.routes";
import { authRoutGuard } from "./core/guards/auth.guard";

export enum ROUTER_TOKENS {
    DASHBOARD = 'dashboard',
    EXPENSES = 'expenses',
    ABOUT = 'about',
    NOT_AUTH = '',
    AUTH = 'authentication',
    LOGIN = `authentication/${AUTH_ROUTES_TOKENS.LOGIN}`,
    LOGOUT = `authentication/${AUTH_ROUTES_TOKENS.LOGOUT}`,
    REGISTER = `authentication/${AUTH_ROUTES_TOKENS.REGISTER}`,
}

export const APP_ROUTES: Routes = [
    {
        path: ROUTER_TOKENS.AUTH,
        component: AuthLayoutComponent,
        children: AUTH_ROUTES
    },
    {
        path: ROUTER_TOKENS.EXPENSES,
        component: MainLayoutComponent,
        children: EXPENSES_ROUTES,
        canActivate: [authRoutGuard]
    },
    {
        path: '',
        redirectTo: ROUTER_TOKENS.AUTH,
        pathMatch: 'full' 
    },
    {
      path: '**',
      component: Page404Component
    },
]