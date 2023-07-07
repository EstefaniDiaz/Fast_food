class APIConnection {

    constructor(apiUrl) {
        this.apiUrl = apiUrl;
      }
    
      static getInstance(apiUrl) {
        if (!APIConnection.instance) {
          APIConnection.instance = new APIConnection(apiUrl);
        }
        return APIConnection.instance;
      }
    
      connect() {
        // Método para establecer la conexión a la API utilizando this.apiUrl
        console.log(`Conexión establecida a la API en la URL: ${this.apiUrl}`);
      }
  }

  export default APIConnection;