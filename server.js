'use strict'

import MariaDbRepo from "./backend/repository/interface/MariaDbRepo.js";
import * as dotenv from 'dotenv';

dotenv.config()
import jwt from "jsonwebtoken";
import express from "express";
import config from "./config.js";

const app = express();
const port = 8989;

app.listen(port, () => console.log(`Listening on port ${port}`));
MariaDbRepo.createConnection(config)
app.post('/admin/login', async (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);

    res
        .json({
            token: token
        })
    ;
});
app.post('/admin/project', async (req, res) => {
    try {
        const token = req.header('token');

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (verified) {
            res.json({
                code: 0
            })
        } else {
            // Access Denied
            res.status(403).json({
                code: 403
            });
        }
    } catch (error) {
        // Access Denied
        res.status(500).json({
            code: 500
        });
    }
});
app.put('/admin/project', async (req, res) => {
    try {
        const token = req.header('token');

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (verified) {
            res.json({
                code: 0
            })
        } else {
            // Access Denied
            res.status(403).json({
                code: 403
            });
        }
    } catch (error) {
        // Access Denied
        res.status(500).json({
            code: 500
        });
    }
});
app.get('/admin/project', async (req, res) => {
    try {
        const token = req.header('token');

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (verified) {
            res.json({
                code: 0
            })
        } else {
            // Access Denied
            res.status(403).json({
                code: 403
            });
        }
    } catch (error) {
        // Access Denied
        res.status(500).json({
            code: 500
        });
    }
});
app.delete('/admin/project', async (req, res) => {
    try {
        const token = req.header('token');

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (verified) {
            res.json({
                code: 0
            })
        } else {
            // Access Denied
            res.status(403).json({
                code: 403
            });
        }
    } catch (error) {
        // Access Denied
        res.status(500).json({
            code: 500
        });
    }
});
app.get('/public/project', async (req, res) => {
});
app.get('/public/news', async (req, res) => {
});