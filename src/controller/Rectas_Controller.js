import APIController from "./API_controller.js";

class RecetasController {
  constructor(apiController) {
    this.apiController = new APIController();
  }

  async getRecetas(req, res) {
    try {
      const data = await this.apiController.fetchData(this.apiController.url);
      res.render('recetas', { meals: data.comidas });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las recetas' });
      console.log(error);
    }
  }

  async getRecetaById(req, res) {
    const id = req.params.id;
    try {
      const data = await this.apiController.fetchData(this.apiController.url);
      const receta = data.comidas.find((receta) => receta.id === id);
      if (receta) {
        res.render('receta', { receta });
      } else {
        res.status(404).json({ message: 'Receta no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la receta' });
    }
  }
}

export default RecetasController;
