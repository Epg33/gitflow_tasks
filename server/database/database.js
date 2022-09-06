const mongo =  require('mongoose');

const URL = 'mongodb://localhost:27017';

mongo.connect(URL, ()=>{ 
    console.log('Connected to MongoDB');
})

module.exports = mongo;

