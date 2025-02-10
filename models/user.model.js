import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String,
            required: [true, 'user name is requires'],
            trim : true,
            minLength: 2,
            maxLength: 50,
    },
    email: {
        type:String,
        required: [true, 'User email is required'],
        unique : true,
        trim : true,
        lowerCase: true,
        minLength: 5,
        maxLength: 254,
        match: [/\S+@\S+\.\S+/,' please fill a valid email'],

    },

    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,

    }
}, {timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;

