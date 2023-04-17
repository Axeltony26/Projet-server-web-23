const commandes = [
    { id: 1, nom: 'Commande 1', produits: [{ nom: 'Produit 1', quantite: 3 }] },
    { id: 2, nom: 'Commande 2', produits: [{ nom: 'Produit 2', quantite: 2 }, { nom: 'Produit 3', quantite: 1 }] },
    { id: 3, nom: 'Commande 3', produits: [{ nom: 'Produit 3', quantite: 1 }, { nom: 'Produit 3', quantite: 5 }] },
    { id: 4, nom: 'Commande 2', produits: [{ nom: 'Produit 4', quantite: 2 }, { nom: 'Produit 3', quantite: 1 }] },
    { id: 5, nom: 'Commande 3', produits: [{ nom: 'Produit 5', quantite: 1 }, { nom: 'Produit 3', quantite: 5 }] },
  ]
  
  export default {
    getCommandes() {
      return commandes;
    },
    getCommandeById(id) {
      return commandes.find(commande => commande.id === id);
    },
    addCommande(commande) {
      commandes.push(commande);
    }
  }
 /* export default {
    async getCommandes() {
      const response = await apiClient.get('/commandes');
      return response.data;
    },
    async createCommande(commande) {
      const response = await apiClient.post('/commandes', commande);
      return response.data;
    },
    async updateCommande(id, commande) {
      const response = await apiClient.put(`/commandes/${id}`, commande);
      return response.data;
    },
    async deleteCommande(id) {
      const response = await apiClient.delete(`/commandes/${id}`);
      return response.data;
    },
  };
  
  */