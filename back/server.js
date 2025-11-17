const path = require("path");
const express = require("express");
const app = express();
//DEPLOYで変数PORTに、それがなければ３０００につなぐサーバのポート。REACTのポートは別
const PORT = process.env.PORT || 3000;
const db = require("./instanceKnexForExpress"); //KNEXインスタンスをひっぱってきた

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//memo: REACT側のPUBLICは素材置き場。EXPRESSでつくったPUBLICは、配信用の完成品置き場。
//DISTがここにくる？？ REACTのコマンドでコピペの指定をしてみた。

//Terminalにメッセージ
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", async (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  //CORSのアクセスコントロールをヘッダーに追加
  res.send("つながりました");
});

//原文表示
app.get("/api/originaltext", async (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  //CORSのアクセスコントロールをヘッダーに追加
  const data = await db("originaltext").select("*");
  res.json(data);
});

// //コメント投稿
// app.post("/api/originaltext", async (req, res) => {
//   res.set({ "Access-Control-Allow-Origin": "*" });
//   const commentToBeAdded = req.body;
//   console.log(commentToBeAdded);
// });
// // });

// //ロードしたらDBのテキストが出る。DBはKNEXのインスタンス
// app.get("/api/originaltext", async (req, res) => {
//   //   res.setHeader("Content-Type", "application/json");
//   //   const data = await knex.select('*').from(QUOTE_TABLE);
//   const data = await db("originaltext").select("*");
//   //   res.status(200).json(data.content, "nyaho-------");
//   console.log(data);
//   res.status(200).json(data);
// });
