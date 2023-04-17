import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default {
  ajouterAdresseLivraison(adresseLivraison) {
    return apiClient.post("/adresse-livraison", adresseLivraison);
  },
};
