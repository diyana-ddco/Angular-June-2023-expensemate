import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { MainLayoutComponent } from "../core/components/main-layout/main-layout.component";

export enum USER_ROUTER_TOKENS {
    BASE = 'user',
    PROFILE = 'profile'
}

export const USER_ROUTES: Routes = [
    {
        path: USER_ROUTER_TOKENS.BASE,
        component: MainLayoutComponent,
        children: [
            {
                path: USER_ROUTER_TOKENS.PROFILE,
                component: ProfileComponent
            },
            {
                path: '',
                redirectTo: USER_ROUTER_TOKENS.PROFILE,
                pathMatch: 'full'
            }
        ]
    }
];