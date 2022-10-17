const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
let jwt = require("jsonwebtoken");
let secretObj = "blipsblops";

app.use(cors());
app.use(express.json());
const { verifyToken } = require("./middleware");

// 같은 컴퓨터 로컬 환경에서 포트는 다르지만 호스트가 같은 환경이라 발생한 이슈다
//같은 도메인주소에서 요청이 들어오면 발생하는 이슈를 미들웨어 cors를 express에 실행시켜서 해결

// http 컨텐츠 타입 알아보기
app.get("/", (req, res) => {
  res.send("Hello this is db connecting node server!");
});

app.listen(port, () => {
  console.log("Now node server loaded");
});

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rhkreodid",
  database: "iphone",
});

connection.connect();

let data1;
let sqltemp;

app.get("/sayhelo", (req, res) => {
  res.send("hellllllo");
});

app.get("/db", (_req, res) => {
  res.send(data1);
});
let image_numbering;
app.get("/image/:numbering", (req, res) => {
  image_numbering = req.params.numbering;
  connection.query(
    "SELECT * FROM iphone.images WHERE numbering =" + image_numbering,
    (error, rows, fields) => {
      if (error) throw error;
      sqltemp = rows;
      res.send(sqltemp);
      console.log(res);
    }
  );
});

function findImageName(numbering) {
  console.log(
    "SELECT * FROM iphone.images WHERE numbering =" + { numbering } + ";"
  );

  return sqltemp;
}
//// 이하jwt

let jwtToken = "";
app.post("/login", (req, res) => {
  let loginInfo;
  {
    usersID = req?.body?.usersid;
    usersPW = req?.body?.userspw;
  }
  console.log(req?.body);
  //이하 db인증
  //이상 db인증
  try {
    jwtToken = jwt.sign(
      {
        exp: 60000,
        data: { id: loginInfo?.usersID },
        algorithms: "HS256",
      },
      secretObj
    );
    return res.json({
      code: 200,
      message: "토큰발급완료",
      jwtToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
});

app.get("/verify", verifyToken, (req, res) => {
  let result;
  res.send(result);
});
