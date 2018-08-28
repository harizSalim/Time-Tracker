const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Sprint = mongoose.model('Sprint');

/* GET USER SPRINTS*/
router.get('/sprints/:username', function (req, res, next) {
    var query = { user: req.url.split(':')[1] };
    Sprint.find(query, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* SAVE NEW SPRINT */
router.post('/newsprint', function (req, res, next) {
    Sprint.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE USER SPRINTS */
router.delete('/deletesprint/:username', function (req, res, next) {
    var query = { user: req.url.split(':')[1] };
    Sprint.deleteMany(query, function (err, obj) {
        if (err) return next(err);
        res.json(obj);
    });
});

module.exports = router;