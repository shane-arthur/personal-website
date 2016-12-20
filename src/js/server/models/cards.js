import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const card = mongoose.Schema({
    views: {
        items: [{
            id: Number,
            icon: String,
            selected: Boolean
        }]
    }
});

export default mongoose.model('Cards', card, 'Cards');