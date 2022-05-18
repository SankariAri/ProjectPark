const { Pool } = require('pg');

const PG_URI = 'postgres://gmzporqc:QYWQP4kk1B4dJtCV_rd1oQ8LUw60NY3a@heffalump.db.elephantsql.com/gmzporqc'

const pool = new Pool ({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query: ', text);
        return pool.query(text, params, callback);
    }
};