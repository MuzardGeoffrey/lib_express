import express from 'express';
import { mySqlConnection } from '../app.js';

export const dashboardRouter = express.Router();

dashboardRouter
.get('/', (req, res, next) => {

    mySqlConnection.query(`SELECT * from article LIMIT 25`, (err, rows, fields) => {
        if (err) throw err;
        res.render('dashboard', { title: 'Dashboard', articles: rows });
    });
})

.post('/article', (req, res, next) => {
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
            res.redirect(`dashboard`);
        }
    )
})


.get('/article/', (req, res, next) => {

    res.render('article');

})

.get('/article/:id', (req, res, next) => {
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

.put('/article/:id', (req, res, next) => {
    const id = req.params.id;
    const { title, content } = req.body;
    if (isNaN(id) || !title || !content) {
        res.render('article', { title: 'Article' });
        return;
    }
    const request = `UPDATE article SET title = '${title}', content = '${content}' WHERE id = ${id}`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        res.send("200");
    });
})

.delete('/article/:id', (req, res, next) => {
    if (isNaN(id)) {
        res.render('article', { title: 'Article' });
        return;
    }
    const request = `DELETE article WHERE id = ${id}`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        res.send("200");
    });
})
//${escape(content)} pour eviter les injection de code
//windows.onload = fonction(){mettre votre code ici(tinymce.init)}