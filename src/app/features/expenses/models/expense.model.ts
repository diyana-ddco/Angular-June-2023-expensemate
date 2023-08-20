import { Category } from "./category.model";
import { Supplier } from "./supplier.model";

export class Expense {
    id?: number;
    expenseDate?: Date;
    amount?: number;
    attachment?: string;
    notes?: string;
    verified: boolean = false;
    archived: boolean = false;
    deleted: boolean = false;
    supplier?: Supplier;
    category?: Category;
}
