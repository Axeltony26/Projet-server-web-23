//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table student
const Clients = database.define('Clients', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATEONLY },
    telephone:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,allowNull:false},
    mot_de_passe:{type:DataTypes.STRING,allowNull:false},
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Clients


