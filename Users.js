import { Users } from "../models/index.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator"

//Connexion
export const userLogin = async (req, res) => {
    const { email,mot_de_passe} = req.body
    if (email) {
        try {
            const user = await Users.findOne({ where: { email } })
            // console.log("User pass", user, "req pass", password)

            if (!user) return res.status(404).json({ message: "No such user exists" })

            //Verification en comparant les mots de passe
            const verifyPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe)

            //Si les mots de passe sont identiques
            if (verifyPassword) {
                let payload = { id: user.id }
                let token = jwt.sign(payload, process.env.TOKEN_SECRET)
                res.status(200).json({ data: { user, token } })
            } else {
                res.status(401).json({ message: "Le mot de passe est incorrect" })
            }

        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}
// Ajouter un utilisateur
export const addUsers = async (req, res) => {

    const { nom, prenom, naissance,photo,telephone,email,mot_de_passe } = req.body

    const newUsers = { nom, prenom, naissance,photo,telephone,email,mot_de_passe, }

     //Erreurs de validation

     const errors = validationResult(req)
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() })   
     }



    try {
        const result = await Users.create(newUsers)
        res.status(201).json({ data: result, message: 'Utilisateur cree avec succes' })
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
//Mettre a jour un utilisateur
export const updateUsers = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(404).json({ message: 'id est obligatoire' })

    const { nom, prenom, naissance,photo,telephone,email,mot_de_passe } = req.body
    const updatedUsers = { nom, prenom, naissance,photo,telephone,email,mot_de_passe }
    try {
        const result = await Users.update(updatedUsers, { where: { id } })
        res.status(200).json({ message: 'User updated' })

    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
//Obtenir les infos d'un utilisateur
export const getUsersById = async (req, res) => {
    const { id } = req.params
    if (!id) return res.status(404).json({ message: 'id est obligatoire' })

    try {
        const result = await Users.findByPk(id, { include: "Roles" })
        res.status(200).json({ data: result })

    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
//la liste de tous les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const result = await Users.findAll({ include: 'Roles' })
        res.status(200).json({ data: result, message: "Tous les utilisateurs recus" })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}
//Donner un role a un utilisateur
export const createRoleUsers = async (req, res) => {
    const usersId = req.params.id
    if (!usersId) res.status(404).json({ error: true, message: error.message })
    const {nom} = req.body
    const newRole = {nom}

    try {
        const currentUsers = await Users.findByPk(usersId)
        const result = await currentUsers.createRole(newRole)
        res.status(201).json({ data: result, message: 'Role ajoute' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//Voir tous les roles d'un utilisateur
export const getUsersRoles = async (req, res) => {
    const usersId = req.params.id
    if (!usersId) res.status(404).json({ error: true, message: error.message })

    try {
        const currentUsers = await Users.findByPk(usersId)
        const result = await currentUsers.getRoles()
        res.status(200).json({ data: result, message: 'Role retourne' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//Supprimer un utilisateur
export const deleteUsers = async (req, res) => {
    const usersId = req.params.id
    if (!usersId) return res.status(404).json({ error: true, message: error.message })

    try {
        const result = await Users.destroy({ where: { id: usersId } })
        res.status(200).json({ data: result, message: 'Utilisateur supprime' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}