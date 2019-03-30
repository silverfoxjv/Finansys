import { Category } from 'src/app/pages/categories/shared/model/category';
import { BaseResourceModel } from 'src/app/shared/model/base-resource.model';

export class Entry extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public type?: string,
        public amount?: string,
        public date?: string,
        public paid?: boolean,
        public categoryId?: number,
        public category?: Category,
    ) {
        super()
    }

    static types = {
        expense: 'Despesas',
        revenue: 'Receita'
    };

    get paidText(): string {
        return this.paid ? 'Pago' : 'Pendente';
    }
}