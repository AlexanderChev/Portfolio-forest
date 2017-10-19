'use strict';

let router = require('express').Router();
let nodemailer = require('nodemailer');
let config = require('../config.json');

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.text) {
        return res.send({ error: 'Укажите данные!' });
    }

    let transporter = nodemailer.createTransport(config.mail.smtp);
    let mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text: req.body.text.trim().slice(0, 500)
};

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return res.send({ error: error.message });
        }

        res.send({message: 'Сообщение отправлено'});
    });

});

module.exports = router;
