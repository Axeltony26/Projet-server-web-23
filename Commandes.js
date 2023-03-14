import {Commandes} from "../models/index.js";

// Contrôleur  "Commandes"
let Comm = {};
export default Comm = {
    async getCommandes(req, res) {
        try {
            const commandes = await Commandes.findAll({
                include: [Clients, Produits]
            });
            res.status(200).json({ commandes });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async getCommande(req, res) {
        try {
            const commande = await Commandes.findByPk(req.params.id, {
                 include: [Clients, Produits]
            });
            if (!commande) {
            return res.status(404).json({ message: 'Desolé, Commande non existante' });
             }
                 res.status(200).json({ commande });
        } catch (err) {
             res.status(500).json({ message: err.message });
        }
    },
    async createCommande(req, res) {
        try {
                 const commande = await Commandes.create(req.body);
                    res.status(201).json({ commande });
        } catch (err) {
                 res.status(400).json({ message: err.message });
        }
    },
    async updateCommande(req, res) {
        try {
                const commande = await Commandes.findByPk(req.params.id);
            if (!commande) {
            return res.status(404).json({ message: 'Desolé, Commande non existante' });
             }
            await commande.update(req.body);
            res.status(200).json({ commande });
        } catch (err) {
             res.status(400).json({ message: err.message });
        }
    },
    async deleteCommande(req, res) {
        try {
                const commande = await Commandes.findByPk(req.params.id);
             if (!commande) {
             return res.status(404).json({ message: 'Desolé, Commande non existante' });
             }
             await commande.destroy();
             res.status(204).json();
        } catch (err) {
             res.status(500).json({ message: err.message });
        }
    }
 };
    