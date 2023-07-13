import Handlebars from 'handlebars';

class Views_controlador {
  constructor() {
    this.searchBtn = document.getElementById('search-btn');
    this.mealList = document.getElementById('meal');
    this.init();
  }

  init() {
    this.searchBtn.addEventListener('click', this.getMealList.bind(this));
    this.mealList.addEventListener('click', this.getMealRecipe.bind(this));
  }

  getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
      .then(response => response.json())
      .then(data => {
        const template = Handlebars.compile(document.getElementById('meal-template').innerHTML);
        const html = template({ meals: data.meals || [] });
        this.mealList.innerHTML = html;
      });
  }

  getMealRecipe() {
    // Lógica para obtener la receta del elemento seleccionado
  }
}

export default Views_controlador;
