import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

export enum USER_ROUTES_TOKENS {
    PROFILE = 'profile'
}

export const USER_ROUTES: Routes = [
    {
        path: USER_ROUTES_TOKENS.PROFILE,
        component: ProfileComponent
    }
];