import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'

const users = [
    { 
        name: 'Jesus',
        surname: 'Vera',
        email: 'jesusvera@gmail.com',
        photo: 'https://avatars.githubusercontent.com/u/172582069?v=4',
        country: 'Colombia',
        role: 'Admin',
        password: 'pass123',
        online: false,
    },
]

User.insertMany(users)