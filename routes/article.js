import express from 'express';
import { mySqlConnection } from '../app.js';

export const articleRouter = express.Router();

articleRouter.get('/', (req, res, next) => {
    res.render('article');
})

.post('/', (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status = 400;
        res.end();
        return;
    }

    let now = new Date();
    let date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()
    mySqlConnection.query(
        `INSERT INTO article (title, content, date, id_user) VALUES ('${escape(title)}', '${escape(content)}', '${date}', '1');`,
        (err, rows, fields) => {
            if (err) throw err
            res.redirect(`/dashboard`);
        }
    )
})

.get('/:id', (req, res, next) => {
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
            res.render(`article`, { title: rows[0].title, content: rows[0].content, id: id})
        }
    });
})

.put('/', (req, res, next) => {
    const { title, content, id } = req.body;
    if (isNaN(id) || !title || !content) {
        res.status = 400;
        res.end();
        return;
    }
    const request = `UPDATE article SET title = "${title}", content = "${content}" WHERE id = ${id}`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        
        if (rows.length === 0) {
            res.status = 400;
            res.end();
            return;
        } else {
            res.status = 200;
            res.end();
            return;
        }
    });
})

.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status = 400;
        res.end();
        return;
    }
    const request = `DELETE FROM article WHERE id = ${id}`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        if (rows.length === 0) {
            res.status = 400;
            res.end();
            return;
        } else {
            res.status = 200;
            res.end();
            return;
        }
    });
})