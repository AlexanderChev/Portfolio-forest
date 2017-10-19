'use strict';

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');
let app = express();

//Index
router.get(['/','/index.html'], (req, res) => {
    res.render('index');
});

//About
router.get('/about.html', function (req, res) {
	let Model = mongoose.model('skills');
	console.log('dsfsd');
	Model.find().then(items => {
		console.log(items);
		res.render('about', {items: items});
	});

});

//Works
router.get('/works.html', function (req, res) {
    let Model = mongoose.model('work');

    Model.find().then(items => {
        res.render('works', {items: items});
    });
});

//Blog
router.get('/blog.html', function (req, res) {
    let Model = mongoose.model('post');

    Model.find({}).then(items => {
        res.render('blog', {items: items});
    });
});

module.exports = router;
