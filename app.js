const express = require("express");
const app = express();
const port = 3000;
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
  host: "34.97.139.192",
  user: "root",
  password: "rhkreodid",
  database: "iphone",
  port: 3306,
});

connection.connect();

let data1;
let sqltemp;

app.get("/sayhelo", (req, res) => {
  res.send("hellllllo");
});

app.get("/db", (req, res) => {
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

let userIdnum;
let yourId;
function handleEr(res) {
  return res.send("nodata");
}

app.post("/login", async (req, res) => {
  let loginInfo;

  if (req) {
    loginInfo = {
      usersID: req.body.usersid,
      usersPW: req.body.userspw,
    };
  } else {
    return res.send(400);
  }
  console.log("받은req▼");
  console.log(loginInfo);
  //이하 db인증
  try {
    connection.query(
      `SELECT*FROM iphone.user_info WHERE user_ID='${loginInfo.usersID}' AND user_PW='${loginInfo.usersPW}'`,

      (error, rows, fields) => {
        console.log("sql출력" + rows[0]);

        if (rows[0] === undefined) {
          error = "nodata";
          console.log("nodata");
          throw error;
        }
        if (rows[0].UID) {
          console.log("not error");
          console.log("rows" + rows[0].UID);

          const temp = rows[0].UID;
          userIdnum = temp;
          yourId = loginInfo.usersID;
          console.log("this is uid[0].UID  " + userIdnum);
        }

        console.log("db실행끝");
      }
    );
    const jwtToken = jwt.sign(
      {
        UID: userIdnum.toString(),
        userId: yourId,
        exp: Math.floor(Date.now() / 1000) + 60 * 120,
      },
      secretObj
    );
    console.log(jwtToken);

    let asdfsdaf = jwt.verify(jwtToken, secretObj);
    console.log("asdfsadf" + asdfsdaf.UID);
    return res.json({
      code: 200,
      message: "false",
      jwtToken,
    });
  } catch (error) {
    console.log("에러문실행");
    console.log(error);
    return res.json({
      code: 200,
      message: "true",
    });
  }
});

app.get("/verify", verifyToken, (req, res) => {
  console.log("인증완료");
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

    return res.send("overflow limit");
  } //원래 returnapp.js 되있는대 내가 쓰고도 왜 저기가 app.js인지 모르겠음.
});

app.post("/putIncart", (req, res) => {
  let gettingPid = req.params.pid;
  let gettingAmount = req.params.amount;
  let usersIdentity = req.params.usersIdentity;
  console.log(gettingPid, gettingAmount);

  if (gettingAmount === (undefined || NaN)) {
    console.log("pageNuma is undefined");
    return res.render("error", {
      message: { reconnect: true },
    });
  }

  try {
    connection.query(
      `SELECT*FROM iphone.user_info WHERE user_ID='${usersIdentity}' AND INSERT INTO user_Cart="pid:${gettingPid},amount:${gettingAmount}"`,
      (error, rows, fields) => {
        res.status(200).json({
          code: 200,
          message: "complete",
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
app.post("/registeUser", (req, res) => {
  let overlaps = false;
  const users = {
    inputId: req.params.input_id,
    inputPw: req.params.input_pw,
  };
  try {
    connection.query(
      "SELECT * FROM iphone.user_info WHERE user_ID='" + inputId + "'",
      (error, rows, fields) => {
        if (rows != null || rows != undefined) {
          overlaps = true;
          return res.json({ code: 200, result: "overlap" });
        } else {
          try {
            //string보낼수있게만 하면 완성
            connection.query(
              "INSERT INTO user_info values" + "'"+ UID,input_id+"'"+ ",'"+ input_pw +"',"+ NULL,
                            (error) => {
                return res.json({ code: 200, result: "complete" });
              }
            );
          } catch (error) {
            return res.json({ code: 200, result: "error" });
          }
        }
      }
    );
  } catch (error) {
    return res.json({ code: 200, result: "error" });
  }
});
