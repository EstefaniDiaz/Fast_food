import express from "express";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import exphbs from 'express-handlebars';
import path from 'path';
import indexRoutes from "./controller/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

//setting
app.set('views',path.join(__dirname, 'views'))// les dice donde se encuentra la carpeta views
app.engine('.hbs', exphbs.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'),'layouts'),
        extname : '.hbs',
    
    }));
app.set('view engine', '.hbs');


// Routes
app.use('/',indexRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;