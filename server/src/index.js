/* eslint-disable linebreak-style */
const express = require("express");
const cors = require("cors");
const volleyBall = require("volleyball");
const rootRoute = require("./routes/rootRoute");
const app = express();

app.use(cors());
app.use(express.json({extended:false}));
app.use(express.urlencoded({ extended: false }));
app.use(volleyBall);

app.use("/api/v1", rootRoute);
app.get("*", (req, res) => res.status(404).json({message: "Not Found"}));


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
