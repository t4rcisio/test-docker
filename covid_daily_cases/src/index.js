import Express from "express";

const app = Express();

const port = 3000;

app.get("/", (request, response) => {
  response.status(200).send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
