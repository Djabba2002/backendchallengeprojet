 const express = require("express");
const morgan = require("morgan");
const clientsRouter = require("./routes/clients")
const comptesRouter = require("./routes/comptes")
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();



app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))



app.use("/clients",clientsRouter)
app.use("/comptes",comptesRouter)









connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://anasdjobbi2:djebba2002@cluster0.ix7rurl.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("db connected")
  } catch (error) {
    console.log(error.message)
  }
}




app.listen(8000, () => {
  connectDb()
  console.log("listening on port 8000 ! ");
});
