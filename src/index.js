import app from "./server.js";

const port = 3000;

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});