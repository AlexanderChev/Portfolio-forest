'use strict';

let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
let mongoose = require('mongoose');
let multiparty = require('multiparty');
let config = require('../config.json');

router.get('/', (req, res, next) => {
    if (!req.session.isReg) {
        res.redirect('/');
    } else {
		//TODO: реализовать рендеринг админки-скилов по данным из БД (дата и значения)
		let Model = mongoose.model('skills');
		Model.find().then(items => {
			let skills = items.reduce((prev, cur) => {
				prev[cur.category] = cur.items.reduce((prev, cur) => {
					prev[cur.name] = cur.value;
					return prev;
				}, {});
				return prev;
			},{});
		});
        res.render('admin');
    }
});

//page Blog
router.post('/post', (req,res) => {
    if(!req.body.postDate || !req.body.postBody || !req.body.postName) {
        return res.json({error: 'Заполните все поля'})
    }
	console.log(req.body);
    let Model = mongoose.model('post'),
        item = new Model({
            title: req.body.postName,
            date: req.body.postDate,
            body: req.body.postBody
        });

    item.save().then(
        i => res.json({ success: 'Запись успешно добавлена!' })
    );e => {
        let error = Object.keys(e.errors)
            .map(key => e.errors[key].message)
            .join(', ');
        res.json({ error: error })
    }
});

//page Works
router.post('/work', (req, res) => {
    let form = new multiparty.Form();

    form.parse(req, function (err, fields, files) {
		if(err) {
            return res.json({error: err.message || err})
		}
		console.log(files.workFile);
		if (!fields.workName || !fields.workTech || !fields.workLink || !(files.workFile[0].size > 0)) {
			res.send({error: 'Все поля должны быть заполнены'});
			return;
		}

		let name = fields.workName[0],
			tech = fields.workTech[0],
			link = fields.workLink[0],
			image = files.workFile[0];

		if (config.avaibleUploadFileTypes.indexOf(image.headers['content-type']) < 0) {
			res.send({error: 'Недопустимый формат изображения!'});
			return;
		}
		console.log(image.headers);
		if (image.size > config.maxUploadFileSize) {
			res.send({error: 'Изображение должно быть меньше 2мб'});
			return;
		}

        let Model = mongoose.model('work'),
            item = new Model({
                name: name,
                tech: tech,
				link: link
			});

        item.save().then(work => {
			let newFilePath = config.http.upload + `/${work._id}${path.extname(image.path)}`;
			fs.writeFileSync(path.resolve(__dirname, '../' + config.http.publicRoot + newFilePath), fs.readFileSync(image.path));

            return Model.update({ _id: work._id}, { $set: {picture: '../' + newFilePath}});
        }, e => {
            throw new Error(Object.keys(e.errors).map(key => e.errors[key].message).join(', '));
        }).then(
            i => res.send({ message: 'Запись успешно добавлена!' }),
            e => res.send({ error: e.message })
        );
    });
});

//page about
router.post('/skills', (req, res) => {
	let Model = mongoose.model('skills');
	let data  = req.body;
	let models = [];
	console.log(req.body);

	Object.keys(data).map(category => ({
		category: category,
		items: Object.keys(data[category]).map(i => ({
			name: i,
			value: data[category][i]
		}))
	})).forEach(item => models.push(new Model(item)));

	if (models.filter(m => m.validateSync()).length) {
		return res.send({error: 'Не удалось сохранить данные!'});
	}

	Model.remove({}).then(() => {
		Model.insertMany(models).then(() => {
			res.send({message: 'Сохранено'});
		});
	});
});

module.exports = router;
