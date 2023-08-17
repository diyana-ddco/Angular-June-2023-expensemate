import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./core/components/auth-layout/auth-layout.component";
import { AUTH_ROUTES, AUTH_ROUTES_TOKENS } from "./auth/auth.routes";
import { Page404Component } from "./core/components/page404/page404.component";
import { MainLayoutComponent } from "./core/components/main-layout/main-layout.component";
import { EXPENSES_ROUTES } from "./features/expenses/expenses.routes";
import { authRoutGuard } from "./core/guards/auth.guard";
import { USER_ROUTES, USER_ROUTES_TOKENS } from "./user/user.routes";

export enum ROUTER_TOKENS {
    ABOUT = 'about',
    NOT_AUTH = '',

    AUTH = 'authentication',
    AUTH_LOGIN = `${AUTH}/${AUTH_ROUTES_TOKENS.LOGIN}`,
    AUTH_LOGOUT = `${AUTH}/${AUTH_ROUTES_TOKENS.LOGOUT}`,
    AUTH_REGISTER = `${AUTH}/${AUTH_ROUTES_TOKENS.REGISTER}`,

    USER = 'user',
    USER_PROFILE = `${AUTH}/${USER_ROUTES_TOKENS.PROFILE}`,

    EXPENSES = 'expenses',
    DASHBOARD = 'dashboard',
}

export const APP_ROUTES: Routes = [
    {
        path: ROUTER_TOKENS.AUTH,
        component: AuthLayoutComponent,
        children: AUTH_ROUTES
    },
    {
        path: ROUTER_TOKENS.USER,
        component: MainLayoutComponent,
        children: USER_ROUTES,
        canActivate: [authRoutGuard]
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