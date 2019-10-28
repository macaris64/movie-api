const mongoose = require('mongoose');

const db = (() => {
    mongoose.connect(
        'mongodb+srv://mustafa:12341234@cluster0-o9i7d.mongodb.net/movie_api?retryWrites=true&w=majority',
        { 
            useNewUrlParser : true,
            useUnifiedTopology: true
        }
    );
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
});

module.exports = db;