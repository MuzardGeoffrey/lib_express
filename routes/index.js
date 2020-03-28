import express from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { mySqlConnection } from '../app.js';
export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function (req, res, next) {
  mySqlConnection.query(`SELECT * from article LIMIT 25`, (err, rows, fields) => {
    if (err) throw err;
    res.render('index', { title: 'index', articles: rows });
  });
})

.get('/login', (req, res, next) => {
  res.render('login');
})

.post('/login', (req, res, next) => {
  const {login, password} = req.body;

  if (!login || !password) {
    res.status = 400;
    res.end();
    return;
  }
  const request = `SELECT * FROM user WHERE login = '${login}' AND password = '${password}';`;
  mySqlConnection.query(request, (err, rows, fields) => {
      if (err) throw err;
      if (rows[0].length === 0) {
        res.status = 401;
      } else {
        var privateKey = fs.readFileSync('private.pem' , 'utf8');
        var token = jwt.sign({ foo: login }, privateKey, { algorithm: 'HS256' });
        res.cookie('auth', token, { maxAge: 900000 });
        res.redirect('/dashboard');
      }
  });
})