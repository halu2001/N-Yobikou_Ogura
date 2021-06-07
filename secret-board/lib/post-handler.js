'use strict';
const pug = require('pug');

function handle(req,res){
  switch(req.method){
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(pug.renderFile('./views/post.pug'));
      break;
    case 'POST':
      // TODO POSTの処理
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end',() => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        handleRedirectPosts(req, res);
      });
      break;
    default:
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}


module.exports = {
  handle
};