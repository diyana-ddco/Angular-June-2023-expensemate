import { Injectable, Provider, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    private readonly authService = inject(AuthService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status)) {
                console.log("logout from the interceptor");
                this.authService.logout();
            }

            console.error(err);
            return throwError(() => err.error?.message || err.statusText);
        }))
    }
}

export const errorInterceptorProvider: Provider = {
    multi: true,
    useClass: ErrorInterceptor,
    provide: HTTP_INTERCEPTORS,
};