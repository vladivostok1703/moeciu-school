import sql from 'mssql';

const getEnvVariable = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Variabila de mediu ${key} nu este definită.`);
    }
    return value;
};

const config: sql.config = {
    user: getEnvVariable('DB_USER'),
    password: getEnvVariable('DB_PASSWORD'),
    server: getEnvVariable('DB_SERVER'),
    database: getEnvVariable('DB_DATABASE'),
    options: {
        encrypt: true, // Azure necesită criptare SSL
        enableArithAbort: true,
    },
};


// Variabilă globală pentru pool
let globalPool: sql.ConnectionPool | null = null;

export const getDbConnection = async () => {
    try {
        if (!globalPool) {
            globalPool = new sql.ConnectionPool(config);
            await globalPool.connect(); // Conectează la baza de date
            console.log('Conexiune creată cu succes');
        }
        return globalPool;
    } catch (error) {
        console.error('Eroare la conexiune:', error);
        throw error;
    }
};
