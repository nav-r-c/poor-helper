const router = require("express").Router();
let Job = require("../models/job.model");

router.route("/").get((req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/createJob").post((req, res) => {
    const title = req.body.title;
    const desc = req.body.description;

    const newJob = new Job({
        title : title,
        description : desc
    })

    newJob.save()
        .then(() => res.json("Jobs Added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router