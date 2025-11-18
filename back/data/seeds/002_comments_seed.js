/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("comment").del();
  await knex("comment").insert({
    id: 1,
    comment: "これはシードの仮コメント",
    // {
    // id: Date.now(),
    // text: selectedText,       // 選択されたテキスト内容
    // comment: commentInput,
    // selector: {
    //   startMeta: { nodeId: '...', offset: ... }, // どの要素内の何文字目か
    //   endMeta: { nodeId: '...', offset: ... }
    // }
  });
};
