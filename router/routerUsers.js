import { Router } from 'express'
import { allUser, userByID, userByName } from '../controllers/users/readUser.js'
import { register } from '../controllers/users/registerUser.js'
import { update } from '../controllers/users/updateUser.js'
import { destroy } from '../controllers/users/deleteUser.js'
import validatorCreate from '../middlewares/validatorCreate.js'
import schemaUsersCreated from '../schemas/users/createSchema.js'
import accountExists from '../middlewares/accountExists.js'
import createHash from '../middlewares/createHash.js'
import passport from '../middlewares/passport.js'

const routerUsers = Router()

// readUser
routerUsers.get('/all', passport.authenticate('jwt', { session: false }), allUser)
routerUsers.get('/id/:valueID', passport.authenticate('jwt', { session: false }), userByID)
routerUsers.get('/name/:valueName', passport.authenticate('jwt', { session: false }), userByName)

// registerUser
routerUsers.post(
    '/register',
    validatorCreate(schemaUsersCreated),
    accountExists,
    createHash,
    register
)

// updateUser
routerUsers.put('/update/:id', passport.authenticate('jwt', { session: false }), createHash, update)

// deleteUser
routerUsers.delete('/destroy/:id', passport.authenticate('jwt', { session: false }), destroy)

export default routerUsers
