const express = require('express')
const path =  require('path')
const cors = require('cors')
const sequelize = require('../database/connectionDB')
const fileUpload = require('express-fileupload');
const authRouter = require('../routes/authRouter')
const publicRouter = require('../routes/publicRouter')
const usersRouter = require('../routes/usersRouter')
const vehiclesRouter = require('../routes/vehiclesRouter')
require('../models/User')
require('../models/Vehicles')

class Server {
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT || 3000
        this.paths = {
            public: "/",
            auth: "/api/auth",
            users: "/api/user",
            vehicles: "/api/vehicle"
        }
        this.middlewares()
        this.connectDB()
        this.routes()
    }

    async connectDB() {
        try {
            await sequelize.sync({force:false})
            console.log("Connect db full");
        } catch (error) {
            console.log(error)
            console.log("Ocurrió un error");
        }
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.set('views', path.join(__dirname, '../public', 'views'));
        this.app.set('view engine', 'hbs');
        this.app.use( express.static('public') );
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.paths.public, publicRouter)
        this.app.use(this.paths.auth, authRouter)
        this.app.use(this.paths.users, usersRouter)
        this.app.use(this.paths.vehicles, vehiclesRouter)
    }

    start() {
        this.app.listen(this.PORT, () => {
            console.log(`Server listening on port ${this.PORT}`)
        })

    }
}

module.exports = Server;
