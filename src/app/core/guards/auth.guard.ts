import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { pipe } from "rxjs";
import { ROUTER_TOKENS } from "src/app/app.routes";
import { UserService } from "src/app/user/user.service";

export function authRoutGuard() {
    return () => {
        return true;
        // const authService = inject(UserService);
        // const router = inject(Router);

        // return authService.userAuth.pipe(
        //     map(permissions) => 
        //         !!permissions?.includes(route) || router.parseUrl(`/${ROUTER_TOKENS.NOT_AUTH}`))
    }
}