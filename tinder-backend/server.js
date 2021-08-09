import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

// App Configuration

const app = express();
const port = process.env.PORT || 7001;
const connection_url = `mongodb+srv://admin:tD9SnPpEM9Z!N-C@cluster0.89aqg.mongodb.net/tinder?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(cors());

// Database Configuration

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Api Endpoints
app.get("/", (req, res) => res.status(200).send("HI"));

app.get("/Home", (req, res) => res.status(200).send("Welcome To Tinder App"));

app.post("/tinder", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/tinder", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener

app.listen(port, () => console.log(`listen buddy ${port}`));
