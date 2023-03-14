import { Categories_produits} from "../models/index.js"



// Contrôleur  "Categories_produits"
let CategoriesP = {};
export default CategoriesP = {
    async getCategories(req, res) {
       try {
           const categories = await Categories_produits.findAll({
               include: [Produits]
            });
           res.status(200).json({ categories });
        }  catch (err) {
           res.status(500).json({ message: err.message });
        }
    },
    async getCategorie(req, res) {
       try {
            const categorie = await Categories_produits.findByPk(req.params.id, {
              include: [Produits]
            });
           if (!categorie) {
              return res.status(404).json({ message: 'Desolé, Categorie non existantes' });
            }
           res.status(200).json({ categorie });
        } catch (err) {
          res.status(500).json({ message: err.message });
       }
    },
    async createCategorie(req, res) {
       try {
            const categorie = await Categories_produits.create(req.body);
             res.status(201).json({ categorie });
        } catch (err) {
             res.status(400).json({ message: err.message });
         }
    },
    async updateCategorie(req, res) {
        try {
            const categorie = await Categories_produits.findByPk(req.params.id);
            if (!categorie) {
             return res.status(404).json({ message: 'Desolé, Categorie non existantes' });
            }
            await categorie.update(req.body);
                res.status(200).json({ categorie });
        } catch (err) {
            res.status(400).json({ message: err.message });
         }
    },
    async deleteCategorie(req, res) {
        try {
            const categorie = await Categories_produits.findByPk(req.params.id);
            if (!categorie) {
            return res.status(404).json({ message: 'Desolé, Categorie non existantes' });
             }
                 await categorie.destroy();
                res.status(204).json();
        } catch (err) {
             res.status(500).json({ message: err.message });
             }
         }
    };
    