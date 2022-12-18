const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
let jwt = require("jsonwebtoken");
let secretObj = "blipsblops";
app.use(cors());
app.use(express.json());
exports.verifyToken = (req, res, next) => {
  console.log("verify 실행");
  console.log("헤더 auth문" + req.headers["authorization"]);
  try {
    let temp = jwt.verify(req.headers["authorization"], secretObj);
    console.log("인증시 데이터" + temp.UID);
    res.status(200).json({
      code: 200,
      message: "true",
      userid: temp.UID,
    });
    console.log("200end");
    return next();
  } catch (error) {
    // 인증 실패
    if (error.name === "TokenExpireError") {
      console.log("TokenExpireError");
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다.",
    });
  }
};
