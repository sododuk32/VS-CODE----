// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const [axing1, setaxing1] = useState(null);
// const [axing2, setaxing2] = useState(null);
// const BACKIP = 'http://localhost:8080';
// import axios from 'axios';

// export const getDB = (data: { number: string }) => {
//     return new Promise((resolve, reject) => {
//         try {
//             const response = axios({
//                 method: 'get',
//                 url: BACKIP + '/image' + number,
//             });
//             resolve(response);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// useEffect(() => {
//     const asyncDB = async() =>{
//         const data = { name : name };
//         const res = await getDB(data) as any;
//         if( res.data === null || res.data === undefined ) return;
//         setaxing1(res.data); } asyncDB(); }
//         ,[ setAxting ]);
