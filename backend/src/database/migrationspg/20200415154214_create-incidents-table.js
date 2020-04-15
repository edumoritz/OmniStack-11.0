
exports.up = function(knex) {
    let createQuery = `CREATE TABLE incidents(
        id SERIAL PRIMARY KEY NOT NULL,
        title TEXT,
        description TEXT,
        value TEXT,
        ong_id TEXT,
        FOREIGN KEY (ong_id) REFERENCES ongs (id)
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE incidents`
    return knex.raw(dropQuery)
};
