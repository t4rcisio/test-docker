import Express from "express";
import csv from "fast-csv";
import fs from "fs";
import path from "path";

const app = Express();

const port = 4000;






app.get("/", (request, response) => {
  response.status(200).send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
