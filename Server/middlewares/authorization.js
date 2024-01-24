const User = require("../models/user")

async function authorizationBuddy(req, res, next) {

    try {
        const {id} = req.params

        const findUser = await User.findBy(id)

        if (!findUser) {
            throw {name: "user_not_found"}
        }
    
        if (req.user.role === "buddy") {
            console.log("buddy")
            next()
        }
        else {
            console.log("student")
            throw {name: "forbidden"}
        }

    } catch (err) {
        next(err)
    }

}

module.exports = authorizationBuddy