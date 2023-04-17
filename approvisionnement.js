/*export default {
    getAllApprovisionnements() {
      return fetch('/api/approvisionnements').then((response) => response.json())
    },
  }
  
  export default {
    getAllApprovisionnements() {
      return fetch('/api/approvisionnements').then((response) => response.json())
    },
  }*/

  import axios from 'axios';

  const API_URL = 'http://localhost:3000';
  
  export default {
    getApprovisionnements() {
      return axios.get(`${API_URL}/approvisionnements`);
    },
    ajouterApprovisionnement(approvisionnement) {
      return axios.post(`${API_URL}/approvisionnements`, approvisionnement);
    },
    supprimerApprovisionnement(id) {
      return axios.delete(`${API_URL}/approvisionnements/${id}`);
    }
  }
  