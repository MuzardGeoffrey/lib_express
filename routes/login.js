import express from 'express';
import { mySqlConnection } from '../app.js';

export const loginRouter = express.Router();

loginRouter
.get('/', (req, res, next) => {
        res.render('login', { title: 'Login' });
})