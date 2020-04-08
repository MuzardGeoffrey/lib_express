import express from 'express';
import { mySqlConnection } from '../app.js';

export const frontArticleRouter = express.Router();

frontArticleRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.render('article');
        return;
    }

    const request = `SELECT * from article where id= '${id}'`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        if (rows[0].length === 0) {
            res.render('404');
        } else {
            const article= rows[0];
            const request = `SELECT * from user where id= '${article.id_user}'`;
            mySqlConnection.query(request, (err, rows, fields) => {
                if (err) throw err;
                if (rows[0].length === 0) {
                    res.render('404');
                } else {
                    let dd = String(article.date.getDate()).padStart(2, '0');
                    let mm = String(article.date.getMonth() + 1).padStart(2, '0'); // +1 because january is at 0
                    let yyyy = article.date.getFullYear();
                    article.date = dd + '/' + mm + '/' + yyyy;
                    res.render(`frontArticle`, { title: article.title, content: article.content, date: article.date, user: rows[0].login})
                }
            });
        }
    });
})