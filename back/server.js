const path = require("path");
const express = require("express");
const app = express();
//DEPLOYで変数PORTに、それがなければ３０００につなぐサーバのポート。REACTのポートは別
const PORT = process.env.PORT || 3000;
const db = require("./instanceKnexForExpress"); //KNEXインスタンスをひっぱってきた
const productionDB = require("./instanceKnexForExpress");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//memo: REACT側のPUBLICは素材置き場。EXPRESSでつくったPUBLICは、配信用の完成品置き場。
//DISTがここにくる？？ REACTのコマンドでコピペの指定をしてみた。

//Terminalにメッセージ
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
/////////////////////////////////////////////////////

//3000サーバ立ち上げ　ルートページ
app.get("/", async (req, res) => {
  // res.set({ "Access-Control-Allow-Origin": "*" });
  //CORSのアクセスコントロールをヘッダーに追加
  res.send("つながりました");
});

//原文表示
app.get("/api/originaltext", async (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.set({ "Access-Control-Allow-Origin": "*" });
  //CORSのアクセスコントロールをヘッダーに追加
  const data = await db("originaltext").select("*");
  res.status(200).json(data);
});

//コメント表示
app.get("/api/comment/", async (req, res) => {
  // res.set({ "Access-Control-Allow-Origin": "*" });
  const data2 = await db("comment").select("*");
  console.log("テーブルからコメントひっぱり", data2);
  res.status(200).json(data2);
});

//コメント投稿
app.post("/api/comment", async (req, res) => {
  // res.set({ "Access-Control-Allow-Origin": "*" });
  const comment = req.body.comment;
  console.log(comment);
  await db("comment").insert({ comment: comment });
  res.status(200).end();
});

app.delete("/api/delete", async (req, res) => {
  // res.set({ "Access-Control-Allow-Origin": "*" });
  const commentToDelete = req.body.comment;
  console.log(commentToDelete);
  await db("comment").where("comment", commentToDelete).delete();
  res.status(200).end();
});

// try {
//   // Knexを使用してデータベースに挿入
//   const [id] = await knex('items').insert({
//     name,
//     description,
//     price
//   }).returning('id'); // 挿入されたレコードのIDを返す (PostgreSQLの場合)

//   res.status(201).json({
//     success: true,
//     message: 'Item created successfully',
//     id: id
//   });

// } catch (err) {
//   console.error(err);
//   res.status(500).json({
//     success: false,
//     message: 'Error creating item',
//     error: err.message
//   });
// }

// });

// //ロードしたらDBのテキストが出る。DBはKNEXのインスタンス
// app.get("/api/originaltext", async (req, res) => {
//   //   res.setHeader("Content-Type", "application/json");
//   //   const data = await knex.select('*').from(QUOTE_TABLE);
//   const data = await db("originaltext").select("*");
//   //   res.status(200).json(data.content, "nyaho-------");
//   console.log(data);
//   res.status(200).json(data);
// });
