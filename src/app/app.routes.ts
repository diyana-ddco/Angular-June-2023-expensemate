import { Routes } from "@angular/router";
import { AUTH_ROUTES, AUTH_ROUTER_TOKENS } from "./auth/auth.routes";
import { Page404Component } from "./core/components/page404/page404.component";
import { EXPENSES_ROUTER_TOKENS } from "./features/expenses/expenses.routes";
import { authRoutGuard } from "./core/guards/auth.guard";
import { USER_ROUTER_TOKENS } from "./user/user.routes";

export enum ROUTER_TOKENS {
    ABOUT = 'about',
    NOT_AUTH = '',
}

export const APP_ROUTES: Routes = [
    {
        path: AUTH_ROUTER_TOKENS.BASE,
        children: AUTH_ROUTES
    },
    {
        path: USER_ROUTER_TOKENS.BASE,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [authRoutGuard]
    },
    {
        path: EXPENSES_ROUTER_TOKENS.BASE,
        loadChildren: () => import('./features/expenses/expenses.module').then(m => m.ExpensesModule),
        canActivate: [authRoutGuard]
    },
    {
        path: '',
        redirectTo: AUTH_ROUTER_TOKENS.BASE,
        pathMatch: 'full' 
    },
    {
      path: '**',
      component: Page404Component
    },
]