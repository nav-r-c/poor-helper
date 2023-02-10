const router = require("express").Router()
let User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error" + err))
})

router.route("/createUser").post((req, res) => {
    const name = req.body.name
    const phoneNumber  = req.body.phoneNumber
    const password = req.body.password
    const type = req.body.type
    const gender = req.body.gender
    const address = req.body.address

    const newUser = User({
        name : name,
        phoneNumber : phoneNumber,
        password : password,
        type : type,
        gender : gender,
        address : address
    })

    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.json("Error : " + err));
})

module.exports = router;