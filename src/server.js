import express from "express";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import exphbs from 'express-handlebars';
import path from 'path';
import IndexController from "./controller/index.js";
import APIConnection from "./model/conexion_API.js";
import APIController from "./controller/API_controller.js";

class Server {
  constructor() {
    this.app = express();
    this.setup();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    this.__dirname = dirname(__filename);
    this.app.use(express.static(path.join(this.__dirname, 'public')));

    this.app.set('views', path.join(this.__dirname, 'views'));
    this.app.engine('.hbs', exphbs.engine({
      defaultLayout: 'main',
      layoutsDir: path.join(this.app.get('views'), 'layouts'),
      extname: '.hbs',
    }));
    this.app.set('view engine', '.hbs');

    // Llamada  de singleton
    const connection = APIConnection.getInstance("http://localhost:3000/recetas");
    connection.connect();

    const apiController = new APIController('http://localhost:3000/recetas');
    apiController.getData();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    const indexController = new IndexController();
    this.app.use('/', indexController.router);
  }

  errorHandler() {
    this.app.use((req, res, next) => {
      res.status(404).json({ message: "Not found" });
    });
  }

  listen(port) {
    this.app.listen(port, () => {
      console.log(`El servidor está escuchando en http://localhost:${port}`);
    });
  }
}

export default Server;
