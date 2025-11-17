/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("comment", function (table) {
    table.increments("id").primary();
    table.integer("ref_id").references("id").inTable("originaltext");
    table.integer("start_index");
    table.integer("end_index");
    table.string("comment").notNullable();
    table.timestamp("time").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("comment");
};
