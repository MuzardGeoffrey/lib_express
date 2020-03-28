import express from 'express';
import { mySqlConnection } from '../app.js';

export const dashboardRouter = express.Router();

dashboardRouter.get('/', (req, res, next) => {

    mySqlConnection.query(`SELECT * from article LIMIT 25`, (err, rows, fields) => {
        if (err) throw err;
        res.render('dashboardArticle', { title: 'Dashboard', articles: rows });
    });
})

/*
//article
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
            res.redirect(`/dashboard`);
        }
    )
})

.get('/article', (req, res, next) => {

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

.put('/article', (req, res, next) => {
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

.delete('/article/:id', (req, res, next) => {
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

//category
.get('/category',  (req, res, next) => {

    res.render('category');
})

.get('/category/:id', (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.render('category');
        return;
    }

    const request = `SELECT * from category where id= '${id}'`;
    mySqlConnection.query(request, (err, rows, fields) => {
        if (err) throw err;
        if (rows[0].length === 0) {
            res.render('404');
        } else {
            res.render(`category`, { title: rows[0].tag, id: id})
        }
    });
})

.post('/category', (req, res, next) => {
    const { tag } = req.body;
    if (!tag) {
        res.status = 400;
        res.end();
        return;
    }

    mySqlConnection.query(
        `INSERT INTO category (tag) VALUES ('${escape(tag)}');`,
        (err, rows, fields) => {
            if (err) throw err
            console.log("test");
            res.redirect(`/dashboard`);
        }
    )
})

.put('/category', (req, res, next) => {
    const { tag, id } = req.body;
    if (isNaN(id) || !tag) {
        res.status = 400;
        res.end();
        return;
    }
    const request = `UPDATE category SET tag = "${tag}" WHERE id = ${id}`;
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

.delete('/category/:id', (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status = 400;
        res.end();
        return;
    }
    const request = `DELETE FROM category WHERE id = ${id}`;
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
})*/

//${escape(content)} pour eviter les injection de code
//windows.onload = fonction(){mettre votre code ici(tinymce.init)}