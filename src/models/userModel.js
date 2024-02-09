import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide email"],
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verfiedToken: String,
    verfiedTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User