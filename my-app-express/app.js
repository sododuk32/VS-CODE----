const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
let jwt = require("jsonwebtoken");
let secretObj = "blipsblops";

app.use(cors());
app.use(express.json());
const { verifyToken } = require("./middleware");

process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err);
  console.error(err);
  console.log(err);
  process.exit(1);
});
//전체 에러 핸들링

// 같은 컴퓨터 로컬 환경에서 포트는 다르지만 호스트가 같은 환경이라 발생한 이슈다
//같은 도메인주소에서 요청이 들어오면 발생하는 이슈를 미들웨어 cors를 express에 실행시켜서 해결
// http 컨텐츠 타입 알아보기
app.get("/", (req, res) => {
  res.send("asdfasdf" + (message = "Hello this is db connecting node server!"));
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
    `SELECT * FROM iphone.images WHERE numbering =${image_numbering}`,
    (error, rows, fields) => {
      if (error) throw error;
      sqltemp = rows;
      res.send(sqltemp);
      console.log(res);
    }
  );
});

// function findImageName(numbering) {
//   console.log(
//     "SELECT * FROM iphone.images WHERE numbering =" + { numbering } + ";"
//   );

//   return sqltemp;
// }
//// 이하jwt

let uid = "";

function handleEr(res) {
  return res.send("nodata");
}

app.post("/login", async (req, res) => {
  let loginInfo = {
    usersID: req?.body?.usersid,
    usersPW: req?.body?.userspw,
  };
  let checkError;
  console.log(req?.body);
  //이하 db인증

  try {
    connection.query(
      `SELECT*FROM iphone.user_info WHERE user_ID='${loginInfo.usersID}' AND user_PW='${loginInfo.usersPW}'`,
      (error, rows, fields) => {
        if (rows.length < 1) {
          console.log("no data matched");
          console.log(error);
          checkError = 1;
        }
        if (rows > 1) {
          uid = rows[0].UID;
        }
      }
    );
    const jwtToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: uid,
      },
      secretObj
    );

    return res.json({
      code: 200,
      message: "토큰발급완료",
      jwtToken,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
});

app.get("/verify", verifyToken, (req, res) => {
  console.log(req?.decoded);
  res.send("처리완료");
});

let pageNum = 0;
let startNum = 0;
let category = "";
let addTagsql = "";

app.post("/productInfo/:category/:startNum", (req, res) => {
  startNum = req.params.startNum;
  category = req.params.category;

  console.log("페이지 쿼리값" + JSON.stringify(req.query));
  pageNum = startNum;

  if (pageNum === (undefined || NaN)) {
    pageNum = 1;
    console.log("pageNuma is undefined");
    return res.render("error", {
      message: { reconnect: true },
    });
  }
  pageNum = Number(pageNum);
  let lengthss = 0;
  let startPage = 0;

  if (pageNum <= 0) {
    pageNum = 1;
  }
  startPage = (pageNum - 1) * 20;

  if (req.body.tags.length > 0) {
    let arr = Object.values(req.body.tags);
    addTagsql += " AND (";
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        addTagsql += `productTag LIKE '%${arr[i]}%'`;
      }
      if (i != 0) {
        addTagsql += `AND productTag LIKE '%${arr[i]}%'`;
        console.log("ff");
      }
    }
    addTagsql += ") ";
  }
  console.log("req=?" + req.body.tags);
  console.log(addTagsql);
  //문제 생기면 콘솔창에 걍 쿼리문 찍어보기
  console.log(
    "SELECT * FROM iphone.productinfo_shop WHERE productCategory='" +
      category +
      "'" +
      addTagsql
  );
  try {
    connection.query(
      "SELECT * FROM iphone.productinfo_shop WHERE productCategory='" +
        category +
        "'" +
        addTagsql,
      (error, rows, fields) => {
        if (rows != undefined) {
          lengthss = rows.length;
          lengthss = lengthss.toString();
        } else {
          lengthss = 1;
        }
      }
    );
    connection.query(
      "SELECT * FROM iphone.productinfo_shop WHERE productCategory='" +
        category +
        "'" +
        addTagsql +
        "LIMIT " +
        startPage.toString() +
        ",20",
      (error, rows, fields) => {
        if (error) throw error;
        sqltemp = JSON.stringify(rows);
        const mylog = sqltemp;
        addTagsql = "";
        return res.json({
          code: 200,
          total: lengthss,
          sqltemp,
        });
      }
    );
  } catch (error) {
    console.log(error);
    addTagsql = "";
    res.send("overflow limit");
    return app.js;
  }
});
