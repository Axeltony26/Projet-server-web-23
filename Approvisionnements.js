//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table student
const Approvisionnement = database.define('Approvisionnement', {
    nom_fournisseur: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATEONLY },
    nom_produit: { type: DataTypes.STRING, allowNull: false }, 
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Approvisionnement


