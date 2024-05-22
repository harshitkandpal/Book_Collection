import express from 'express';
import { Admin } from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(cookieParser());

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
            if (!admin) {
                return res.json({ message: "admin not found" });
            }
            const validPassword = await bcrypt.compare(password, admin.password);
            if (!validPassword) {
                return res.json({ message: "wrong password" });
            }
            const token = jwt.sign({ username: admin.username, role: 'admin' }, process.env.Admin_Key);
            res.cookie('token', token, { httpOnly: true});
            return res.json({ login: true, role: 'admin' });
    } catch (error) {
        return res.json({ error: error.message });
    }
});

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "Invalid Admin" });
    } else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if (err) {
                return res.json({ message: "Invalid token" });
            } else {
                req.username = decoded.username;
                req.role = decoded.role;
                next();
            }
        });
    }
};


router.get('/verify', verifyAdmin, (req, res) => {
    return res.json({ login: true, role: req.role });
});


router.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ logout: true });
});


export { router as AdminRouter, verifyAdmin };
