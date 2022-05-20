const { Pool } = require('pg');

const PG_URI = 'postgres://oxkxgjtm:O-rMzpWr5q6O0oAx47qwaYG-nbn0x6Qb@heffalump.db.elephantsql.com/oxkxgjtm'

const pool = new Pool ({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query: ', text);
        return pool.query(text, params, callback);
    }
};