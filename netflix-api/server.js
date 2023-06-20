const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");



const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect("mongodb+srv://subratranjan400:AqN72NomE0kXSNqQ@cluster0.pir7sgc.mongodb.net/netflix-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started:"))
