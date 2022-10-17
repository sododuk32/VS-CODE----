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
  let result2 = {};
  console.log("jwt값:" + takeToken + "\n" + "키값:" + secretObj + "\n");
  let answer = jwt.verify(takeToken, secretObj, { algorithms: ["HS256"] });
  console.log("응답" + answer);
  result = answer;
  next();
};

// verify 콜백함수
// function (err, decoded) {
//   (err, decoded) => {
//     if (err) {
//       if (error.name === "TokenExpireError") {
//         console.log("에러 토큰만료");
//         result2 = err;
//         return res.status(419).json({
//           code: 419,
//           message: "토큰이 만료되었습니다.",
//         });
//       }
//       console.log("에러 유효하지않은토큰");
//       result2 = err;

//       return res.status(401).json({
//         code: 401,
//         message: "유효하지 않은 토큰입니다.",
//       });
//     }

//     if (decoded) {
//       console.log("디코딩됨");
//       result2 = JSON.stringify(decoded);
//       result = JSON.stringify(decoded);
//       console.log("결과:" + result2);
//       next();
//     }
//   };
// }
