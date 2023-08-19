import { Category } from "./category.model";
import { Supplier } from "./supplier.model";

export interface Expense {
    id: number;
    expenseDate: Date;
    amount: number;
    attachment: string;
    notes: string;
    verified: boolean;
    archived: boolean;
    deleted: boolean;
    supplier: Supplier;
    category: Category;
}
