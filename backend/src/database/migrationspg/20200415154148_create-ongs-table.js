
exports.up = function(knex) {
    let createQuery = `CREATE TABLE ongs(
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT,
        whatsapp TEXT,
        city TEXT,
        UF TEXT
      )`
      return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE ongs`
    return knex.raw(dropQuery)
};
