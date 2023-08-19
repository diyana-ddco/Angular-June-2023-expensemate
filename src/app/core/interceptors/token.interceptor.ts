import { Injectable, Provider, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private authService = inject(AuthService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = this.authService.getToken();
        if (access_token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${access_token}` }
            });
        }

        return next.handle(request);
    }
}

export const tokenInterceptorProvider: Provider = {
    multi: true,
    useClass: TokenInterceptor,
    provide: HTTP_INTERCEPTORS,
};