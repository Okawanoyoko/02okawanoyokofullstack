/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//原文を持ってくる処理
const original = require("../data/originaltext.json");
//マイグレで作ったテーブルに豆乳
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("originaltext").del();
  await knex("originaltext").insert(textsJson);
};
