import { Categories_produits, Produits} from "../models/index.js";

// Contrôleur pour la table "Produits"
let ProduitC = {};
export default ProduitC = {
    async getProduits(req, res) {
      try {
        const produits = await Produits.findAll({
          include: [Categories_produits]
        });
        res.status(200).json({ produits });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  
    async getProduit(req, res) {
      try {
        const produit = await Produits.findByPk(req.params.id, {
          include: [Categories_produits]
        });
        if (!produit) {
          return res.status(404).json({ message: 'Desolé, Produit non existant' });
        }
        res.status(200).json({ produit });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  
    async createProduit(req, res) {
      try {
        const produit = await Produits.create(req.body);
        res.status(201).json({ produit });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    },
  
    async updateProduit(req, res) {
      try {
        const produit = await Produits.findByPk(req.params.id);
        if (!produit) {
          return res.status(404).json({ message: 'Desolé, Produit non existant' });
        }
        await Produits.update(req.body);
        res.status(200).json({ produit });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    },
  
    async deleteProduit(req, res) {
      try {
        const produit = await Produits.findByPk(req.params.id);
        if (!produit) {
          return res.status(404).json({ message: 'Desolé, Produit non existant' });
        }
        await Produits.destroy();
        res.status(204).json();
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  };
  
  