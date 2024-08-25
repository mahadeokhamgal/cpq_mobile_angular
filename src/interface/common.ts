export class QuoteModel {
    quoteId: number;
    customer: Customer;
    id: string;
    name: string;
    products: Product[];

    constructor(model: QuoteModal) {
        this.quoteId = model.quoteId;
        this.name = model.name || 'Untitled';
        this.id = model.id;
        this.customer = model.customer;
        this.products = model.products || [];
    }
}

export interface QuoteModal {
    quoteId: number;
    name: string;
    customer: Customer;
    id: string;
    products: Product[];
}

export interface Customer {
    name: string;
    tier: string;
}

export interface Product {
    "id": number;
    "productId": string;
    "productName": string,
    "productCategory": string,
    "data": number,
    "price": number,
    "features": string[],
    quntity: number
}

export interface ProductCatalog {
    "id": number;
    "productId": string;
    "productName": string,
    "productCategory": string,
    "data": number,
    "price": number,
    "features": string[],
    quntity: number
}

export const Customers = [
    'Customer Customer BRT 1',
    'Customer Alaska',
    'Customer American Samoa',
    'Customer Connecticut',
    'Customer Delaware',
    'Customer District Of Columbia',
    'Customer Guam',
    'Customer Hawaii',
    'Customer Idaho',
    'Customer Illinois',
    'Customer Indiana',
    'Customer Marshall Islands',
    'Customer Maryland',
    'Customer Tennessee',
    'Customer Washington',
    'Customer West Virginia',
    'Customer Wisconsin',
    'Customer Wyoming'];