//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table student
const Details_commandes = database.define('Details_commandes', {
    nom_produit_achete: { type: DataTypes.STRING, allowNull: false },
    quantite:{ type: DataTypes.STRING, allowNull: false },
    prix:{ type: DataTypes.STRING, allowNull: false },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Details_commandes


