// first import mongoose for mongo db
const mongoose = require('mongoose');
//schema - each schema maps to DB collection. in simple it defines the shape of the document in the collection.
const {Schema} = mongoose;
//schemas are building blocks of models
const testSchema = new Schema({
    name: String,
    summary: String,
})

// model allows to create an instance  of our objects
mongoose.model('testSchema', testSchema);
