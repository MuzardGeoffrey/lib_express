import express from 'express';
import { mySqlConnection } from '../app.js';

export const categoryRouter = express.Router();

categoryRouter.get('/',  (req, res, next) => {

    mySqlConnection.query(`SELECT * from category LIMIT 25`, (err, rows, fields) => {
        if (err) throw err;
        res.render('dashboardCategory', { title: 'dashboardCategory', categorys: rows });
    });
})

categoryRouter.get('/create',  (req, res, next) => {
    res.render('category');
})

.get('/:id', (req, res, next) => {
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
            res.render(`category`, { tag: rows[0].tag, id: id})
        }
    });
})

.post('/', (req, res, next) => {
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
            res.redirect(`/dashboard/category`);
        }
    )
})

.put('/', (req, res, next) => {
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

.delete('/:id', (req, res, next) => {
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
})