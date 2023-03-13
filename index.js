import Users from "./Users.js";
import Roles from "./Roles.js";
import Produits from "./Produits.js";
import Categories_produits from "./Categories_produits.js";
import Commandes from "./Commandes.js";
import Details_commandes from "./Details_commande.js";
import Clients from "./Clients.js";
import Adresse_livraison from "./Adresses_livraison.js";
import Approvisionnement from "./Approvisionnements.js";
import Fournisseurs from "./Fournisseurs.js";

Clients.hasOne(Adresse_livraison)
Adresse_livraison.belongsTo(Clients)

Users.hasOne(Adresse_livraison)
Adresse_livraison.belongsTo(Users)

Categories_produits.hasMany(Produits)
Produits.belongsTo(Categories_produits)

Commandes.hasMany(Details_commandes)
Details_commandes.belongsTo(Commandes)

Commandes.hasMany(Clients)
Clients.belongsTo(Commandes)

Commandes.hasMany(Users)
Users.belongsTo(Commandes)

Adresse_livraison.hasMany(Commandes)
Commandes.belongsTo(Adresse_livraison)

Fournisseurs.hasMany(Approvisionnement)
Approvisionnement.belongsTo(Fournisseurs)

Produits.hasMany(Approvisionnement)
Approvisionnement.belongsTo(Produits)

Produits.belongsToMany(Fournisseurs, {through:"Produits_fourni"})
Fournisseurs.belongsToMany(Produits, {through:"Produits_fourni"})

Users.belongsToMany(Roles, {through:"Users_roles"})
Roles.belongsToMany(Users, {through:"Users_roles"})


export {Users,Roles,Produits,Categories_produits,Commandes,Details_commandes,Clients,Adresse_livraison,Fournisseurs,Approvisionnement}


