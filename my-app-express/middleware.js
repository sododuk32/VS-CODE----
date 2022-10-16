const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
let jwt = require("jsonwebtoken");
let secretObj = "blipsblops";
app.use(cors());
app.use(express.json());

exports.verifyToken = (req, res, next) => {
  let takeToken = req.get("Authorization");

  console.log("들어온key값" + takeToken);
  // var decoded = jwt.decode(takeToken, {
  //   algorithms: ["RS256"],
  //   complete: true,
  // });
  // console.log(decoded.header);
  // console.log(decoded.payload);
  // console.log(decoded);
  // next();
  try {
    verifyresult = jwt.verify(takeToken, secretObj, [
      { algorithms: ["RS256"], complete: true, jwtid },
      (decoded) => {
        result = decoded;
        console.log(decoded);
        next();
      },
    ]);
  } catch (error) {
    if (error.name === "TokenExpireError") {
      console.log("토큰만료");
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    console.log("유효하지않은토큰");
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다.",
    });
  }
};
