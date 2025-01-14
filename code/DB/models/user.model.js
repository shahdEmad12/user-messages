import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    username:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    isConfirmed:{
        type: Boolean,
        default: false
    },
    profilePicture: String
},{
    timestamps: true
})

const User = model('User', userSchema)
export default User