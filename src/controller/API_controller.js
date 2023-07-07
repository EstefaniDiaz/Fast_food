class APIController {
    constructor(url) {
      this.url = url;
    }
  
    fetchData() {
      return fetch(this.url)
        .then(response => response.json())
        .catch(error => {
          throw new Error(`Error al obtener los datos de la API: ${error.message}`);
        });
    }
  
    getData() {
      return this.fetchData()
        .then(data => {
          console.log(data); // Manipula los datos de la respuesta
          return data;
        })
        .catch(error => {
          console.error(error); // Maneja el error
        });
    }
  }
  
export default APIController;