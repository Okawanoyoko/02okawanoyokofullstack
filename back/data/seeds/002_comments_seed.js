/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
 await knex("originaltext").del();
  await knex("originaltext").insert({
    id: textsJson.id,
    title: textsJson.title,
    text: textsJson.text,

  {
  id: Date.now(),
  text: selectedText,       // 選択されたテキスト内容
  comment: commentInput,
  selector: {
    startMeta: { nodeId: '...', offset: ... }, // どの要素内の何文字目か
    endMeta: { nodeId: '...', offset: ... }
  }
}
};
