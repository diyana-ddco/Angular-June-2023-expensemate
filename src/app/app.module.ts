import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { ExpensesModule } from './features/expenses/expenses.module';
import { errorInterceptorProvider } from './core/interceptors/error.interceptor';
import { tokenInterceptorProvider } from './core/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    CoreModule,
    AuthModule,
    UserModule,
    ExpensesModule,

    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [tokenInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
