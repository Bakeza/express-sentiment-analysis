const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "../client")));

app.use(express.json());
app.use(cors());

app.post("/analyze", async (req, res) => {
  const url = req.body.url;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.post(
      `https://api.meaningcloud.com/sentiment-2.1`,
      null,
      {
        params: {
          key: apiKey,
          url: url,
          lang: "en",
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error analyzing the URL");
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
