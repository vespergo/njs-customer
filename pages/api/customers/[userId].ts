import type { NextApiRequest, NextApiResponse } from 'next';
import { Customer } from '../../../types';
import { getCustomersByUserId } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer[] | {error: string}>
) {
    try {
        const { userId } = req.query;
        const customers = await getCustomersByUserId(Number(userId));
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
