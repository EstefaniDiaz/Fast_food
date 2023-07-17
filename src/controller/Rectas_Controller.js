import APIController from "./API_controller.js";

class RecetasController {
  constructor(apiController) {
    this.apiController = new APIController();
  }

 /*  async getRecetas(req, res) {
    try {
      const data = await this.apiController.fetchData(this.apiController.url);
      res.render('recetas', { meals: data.comidas });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las recetas' });
      console.log(error);
    }
  } */

  async getRecetaById(req, res) {
    //const id = parseInt(req.params.id);
    const ingredient ="Sal";
    try {
      const data = await this.apiController.fetchData(this.apiController.url);
      const comidasConIngrediente = data.comidas.filter(comida =>
        comida.ingredientes.includes(ingredient)
      );
      
      if (comidasConIngrediente.length > 0) {
        res.render('recetas', { comidasConIngrediente });
        console.log("me quede en 1");
      } else {
        res.status(404).json({ message: `El ingrediente "${ingredient}" no se encuentra en ninguna comida.` });
        console.log("me quede en 2");
      }
    } catch (error) {
      res.status(500).json({ message: 'Error:', error });
      consolge.log("fregaste estas en error");
    }
  }
}

export default RecetasController;
