import mongoose, { connection } from "mongoose";

export async function connectToDB() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("DB connected Succssfully");
        })

        connection.on('error', (error) => {
            console.log("Error at db connection", error);
            process.exit()
        })

    } catch (error) {
        console.log("somthing went wrong while DB connection...!");

    }
}