export interface Customer {
    id: number;
    name: string;
    email: string;
}

export interface CustomersPageProps {
    customers: Customer[];
}
