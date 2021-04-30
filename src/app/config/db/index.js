const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/manage_customer', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to db!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}
module.exports = { connect }