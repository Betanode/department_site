const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

const { body, validationResult } = require('express-validator');

router.post('/createnote', [

    body('email').isEmail(),
]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await Note.create({
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    });
    module.exports = router;