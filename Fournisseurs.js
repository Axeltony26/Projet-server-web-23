//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table student
const Fournisseurs = database.define('Fournisseurs', {
    nom_destinataire: { type: DataTypes.STRING, allowNull: false },
    prenom_destinataire: { type: DataTypes.STRING, allowNull: false },
    pays:{ type: DataTypes.STRING, allowNull: false },
    ville:{ type: DataTypes.STRING, allowNull: false },
    rue:{ type: DataTypes.STRING, allowNull: false },
    telephone:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,allowNull:false},
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Fournisseurs


