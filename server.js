import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import ContactRouter from "./router/ContactRouter.js"

dotenv.config();
const app = express();
const port = process.env.PORT;
const dbConnect = process.env.MONGO;

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors())

// app.get("/api/contact",getContact);

// app.get("/api/contact/:id",getContactId);

// app.post("/api/contact",postContact);

// app.put("/api/contact/:id",putContactId);

// app.delete("/api/contact/:id",deleteContactId);

app.use('/api/contact',ContactRouter)

app.use('/',(req,res)=>{
    res.json({message : `Welcome from NodeJs Server Api`});
})

mongoose.connect(dbConnect).then(()=>{
    console.log("Database_Connect");
}).catch((error)=>{
    console.log(error);
})

app.listen(port,(e)=>{
    if(e){
    console.log(e);
    }else{
        console.log(`Server on port ${port}`);
    }
})



