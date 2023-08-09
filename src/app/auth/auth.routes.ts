import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export enum AUTH_ROUTES_TOKENS {
    REGISTER = 'register',
    LOGIN = 'login',
    LOGOUT = 'logout',
    FORGOT_PASSWORD = 'forgot-password'
}

export const AUTH_ROUTES: Routes = [
    {
        path: AUTH_ROUTES_TOKENS.REGISTER,
        component: RegisterComponent
    },
    {
        path: AUTH_ROUTES_TOKENS.LOGIN,
        component: LoginComponent
    },
    {
        path: AUTH_ROUTES_TOKENS.LOGOUT,
        component: LogoutComponent
    },
    {
        path: AUTH_ROUTES_TOKENS.FORGOT_PASSWORD,
        component: ForgotPasswordComponent
    },
    {
        path: '',
        redirectTo: AUTH_ROUTES_TOKENS.LOGIN,
        pathMatch: 'full'
    }
];