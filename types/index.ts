export interface Customer {
    id: number;
    name: string;
    email: string;
}

export interface CustomersPageProps {
    customers: Customer[];
}

export interface Media {
    id: number;
    user_id: number;
    location: string;
    picture_location: string;
    name: string;
    created_at : number;
}

export interface MediaPageProps {
    media: Media[];
}