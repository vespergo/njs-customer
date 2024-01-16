import { GetServerSideProps } from 'next';
import { Customer, CustomersPageProps } from '../types';
import { getCustomers } from '../lib/db';

const CustomersPage: React.FC<CustomersPageProps> = ({ customers }) => {
    return (
        <div>
            <h1>Customers</h1>
            <ul>
                {customers.map((customer: Customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const customers = await getCustomers();
    return {
        props: {
            customers,
        },
    };
};

export default CustomersPage;
