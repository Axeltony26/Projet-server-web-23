import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table note
const Roles = database.define('Roles', {
    nom: { type: DataTypes.STRING,allowNull:false},
  
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Roles