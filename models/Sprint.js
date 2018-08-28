var mongoose = require('mongoose');

let SprintSchema = new mongoose.Schema({
    name: String,
    duration: String,
    status: String,
    progress: String,
    description: String,
    notification: Boolean,
    user: String,
    createdAt: String,
    startedAt: String,
    finishedAt: String
});

mongoose.model('Sprint', SprintSchema);