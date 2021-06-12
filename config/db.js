const mongoose = require('mongoose')
const config = require('config')

let db

if (process.env.NODE_ENV === 'production') {
  db = "mongodb+srv://"+process.env.mongodb_username+":"+process.env.mondodb_password+"@cluster0.rsp6p.mongodb.net/"+process.env.mondodb_dbname+"?retryWrites=true&w=majority"
} else {
  db = config.get('mongoURI')
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1)
  }
}

module.exports = connectDB
