const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
let jwt = require("jsonwebtoken");
let secretObj = require("jwt-key");
app.use(cors());
// 같은 컴퓨터 로컬 환경에서 포트는 다르지만 호스트가 같은 환경이라 발생한 이슈다
//같은 도메인주소에서 요청이 들어오면 발생하는 이슈를 미들웨어 cors를 express에 실행시켜서 해결

//
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
let loginInfo;
{
  usersID = "";
  usersPW = "";
}
let jwtToken = "";
app.get("/login", (req, res) => {
  loginInfo?.usersID = req.params.usersid;
  loginInfo?.usersPW = req.params.usersid;
  //이하 db인증
  //이상 db인증
  jwtToken = jwt.sign({id:loginInfo?.usersID, exp: Math.floor(Date.now() / 1000) + (60 * 60),}
  , secretObj?.jwtObj?.secret, { algorithm: 'RS256'});
  res.send(jwtToken);
});


function checkingToken(token) {
  let decoded = jwt.verify(token, secretObj.secret);
  if (decoded) {
    // 권한이 있음.
    return true;
  } else {
    // 권한이 없음.
    return false;
  }
}


app.get("/", (req, res) => {

  if(checkingToken(req.params.jwt))
  {
    res.send("access");
  }
  else {res.send("access deny")}

});


