import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'


import database from './connexion.js'

// Les routes ici  (cela va creer les tables automatiquement)
import UsersRoutes from "./routes/UsersRoutes.js"
import RolesRoutes from "./routes/RolesRoutes.js"
import ClientsRoutes from "./routes/ClientsRoutes.js"
import ApprovisionnementRoutes from "./routes/ApprovisionnementRoutes.js"
import Details_CommRoutes from "./routes/Details_CommRoutes.js"
import FournisseursRoutes from './routes/FournisseursRoutes.js'
import Adresse_livraisonRoutes from './routes/Adresse_livraisonRoutes.js'
import CommandesRoutes from './routes/CommandesRoutes.js'
import ProduitsRoutes from './routes/ProduitsRoutes.js'
import CategoriesRoutes from "./routes/CategoriesRoutes.js"
//Creation des tables
database.sync()


// const PORT = dotenv.config().parsed.PORT
const PORT = process.env.PORT

// console.log('ENV',dotenv.config().parsed)

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Utiliser les routes ici
app.use('/Users',UsersRoutes)
app.use('/Roles',RolesRoutes)
app.use('/Clients',ClientsRoutes)
app.use('/Approvisionnement',ApprovisionnementRoutes)
app.use('/Details_commandes',Details_CommRoutes)
app.use('/Fournisseurs',FournisseursRoutes)
app.use('/Adresse_livraison',Adresse_livraisonRoutes)
app.use('/Commandes',CommandesRoutes)
app.use('/Produits',ProduitsRoutes)
app.use('/Categories_produits',CategoriesRoutes)

app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))





