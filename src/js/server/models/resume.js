import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const resume = mongoose.Schema({
    resume : {
        name: String
    }
});

export default mongoose.model('Resume', resume, 'Resume');