/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//原文を持ってくる処理
const fs = require("fs");
const filePath = "./data/originaltext.json";
const jsonString = fs.readFileSync(filePath, "utf8");
const textsJson = JSON.parse(jsonString);

//マイグレで作ったテーブルに豆乳
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("originaltext").del();
  await knex("originaltext").insert(textsJson);
  // ({
  //   id: textsJson.id,
  //   title: textsJson.title,
  //   text: textsJson.text,
  // });
};
