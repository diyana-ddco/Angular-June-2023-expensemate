import { Routes } from "@angular/router";
import { ExpensesListComponent } from "./components/expenses-list/expenses-list.component";
import { MainLayoutComponent } from "src/app/core/components/main-layout/main-layout.component";
import { ExpenseDetailComponent } from "./components/expense-detail/expense-detail.component";

export enum EXPENSES_ROUTER_TOKENS {
    BASE = 'expenses',

    LIST = '',
    DETAIL = ':id',
} 

export const EXPENSES_ROUTES: Routes = [
    {
        path: EXPENSES_ROUTER_TOKENS.BASE,
        component: MainLayoutComponent,
        children: [
            {
                path: EXPENSES_ROUTER_TOKENS.LIST,
                component: ExpensesListComponent
            },
            {
                path: EXPENSES_ROUTER_TOKENS.DETAIL,
                component: ExpenseDetailComponent
            },
            {
                path: '',
                redirectTo: EXPENSES_ROUTER_TOKENS.LIST,
                pathMatch: 'full'
            }
        ]
    }
]