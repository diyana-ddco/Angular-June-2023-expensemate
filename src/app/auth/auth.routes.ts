import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { AuthLayoutComponent } from "../core/components/auth-layout/auth-layout.component";

export enum AUTH_ROUTER_TOKENS {
    BASE = 'authentication',
    REGISTER = 'register',
    LOGIN = 'login',
    LOGOUT = 'logout',
    FORGOT_PASSWORD = 'forgot-password'
}

export const AUTH_ROUTES: Routes = [
    {
        path: AUTH_ROUTER_TOKENS.BASE,
        component: AuthLayoutComponent,
        children: [
            {
                path: AUTH_ROUTER_TOKENS.REGISTER,
                component: RegisterComponent
            },
            {
                path: AUTH_ROUTER_TOKENS.LOGIN,
                component: LoginComponent
            },
            {
                path: AUTH_ROUTER_TOKENS.LOGOUT,
                component: LogoutComponent
            },
            {
                path: AUTH_ROUTER_TOKENS.FORGOT_PASSWORD,
                component: ForgotPasswordComponent
            },
            {
                path: '',
                redirectTo: AUTH_ROUTER_TOKENS.LOGIN,
                pathMatch: 'full'
            }
        ]
    }
];