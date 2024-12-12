import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../lib/db';

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const pool = await getDbConnection();

        // Exemplu: Execută o interogare SQL
        const result = await pool.request().query('SELECT TOP 10 * FROM dbo.test2');

        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Eroare la API:', error);
        res.status(500).json({ error: 'Nu s-a putut conecta la baza de date' });
    }
}
