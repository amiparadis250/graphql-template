import 'dotenv/config'
import mongoose from 'mongoose'

const CONNECTION_STRING =
    process.env.NODE_ENV === 'production'
        ? process.env.MONGO_PROD_DB
        : process.env.NODE_ENV === 'test'
            ? process.env.MONGO_TEST_DB
            : process.env.MONGO_DEV_DB


export const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(CONNECTION_STRING)
        console.log('MongoDB connected successfully 🤖');
    } catch (error) {
        console.log(`Database connection error: ${error}`)
        process.exit(1)
    }
}
