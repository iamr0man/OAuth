const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false 
        })
        console.log('Mongo Connected')
    } catch(e) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB;