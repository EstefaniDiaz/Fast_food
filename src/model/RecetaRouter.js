import express from 'express';
import APIController from '../controller/API_controller.js'
class RecetaRouter {
    constructor({recetaModel,url}) {
      this.APIcontroller = new APIController (recetaModel,url);
      this.router = express.Router();
      this.setupRoutes();
    }
  
    setupRoutes() {
      this.router.get('/', this.APIcontroller.getData.bind(this.APIcontroller));
      this.router.get('/:id', this.APIcontroller.getbyid.bind(this.APIcontroller));
    }
  }
  
  export default RecetaRouter;