import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : false
    },
    address : {
        type : String,
        required : true
    }
},
    {
        timestamps : true
    }
)
const ContactModel = mongoose.model("contact",ContactSchema);
export default ContactModel;