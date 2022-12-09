import mongoose from 'mongoose'

// mongoose.connect("mongodb://localhost:27017/ynov-pwa")
mongoose.connect(`mongodb+srv://ynov-pwa:${process.env.DB_PASSWORD}@ynov-pwa.xknnnxv.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))