import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Subscription Name is Requires'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },

    price:{
        type: Number,
        required: [true, 'Subscription Price is Req'],
        min: [0, 'Price must Greater than 0'],

    },

    currency: {
        type: String,
        enum: ['IND','USD'],
        default: 'IND'
    },

    frequency: {
        type: String,
        enum: ['daily','weekly','monthly','yearly'],

    },
    category:{
        type: String,
        enum: ['sports','news','entertainment','technology','Adventures'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type:  String,
        enum: ['active','canceled','expired'],
        default: 'active'
    },
    startDate:{
        type:Date,
        required: true,
        validate: {
            
            validator: (val) => val <= new Date(),
            message: 'Start date must be in Past',
        }
    },

    renewalDate: {
        type: Date,
        validate:{
            validator: function(val){
                return value > this.startDate;
            },
            message: 'Renewal date must be after the start date',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }

},{timestamps: true});


// Auto calculate  renewalDate
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods= {
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,

        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }
    next();
})