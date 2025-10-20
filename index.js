import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("LINE Webhook is running 🚀");
});

app.post("/webhook", (req, res) => {
  const events = req.body.events;
  console.log("Received events:", events);

  if (events.length > 0) {
    const replyToken = events[0].replyToken;
    const message = events[0].message.text;
    console.log("User said:", message);
  }

  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
