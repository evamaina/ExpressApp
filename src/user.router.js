import express from 'express';
import User from './models/user.model';

const router = express.Router();

router.get('/users', (req, res) => {
    const userModel = new User();
    res.status(200).json(userModel.getAll());
});

router.post('/users', (req, res) => {
    const { body } = req;
    res.status(201).send('POST route on things.');
});

export default router;