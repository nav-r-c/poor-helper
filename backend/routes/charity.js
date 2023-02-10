const router = require("express").Router();
let Charity = require("../models/charity.model");

router.route("/").get((req, res) => {
    Charity.find()
        .then(charities => res.json(charities))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/createCharity").post((req, res) => {
    const companyName = req.body.companyName;
    const desc = req.body.description;

    const newJob = new Charity({
        companyName : companyName,
        description : desc
    })

    newJob.save()
        .then(() => res.json("Charities Added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router