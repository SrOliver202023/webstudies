module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'adm123',
    database: 'sqlnode',
    define: {
        timestamps: true, // created_at, update_at = when was modified 
        undescored: true // underline format 
    },
};
