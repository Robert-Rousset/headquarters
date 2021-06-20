const router = require("express").Router();
const { Timer, User } = require("../../models");
const moment = require("moment");

router.get("/", async (req, res) => {
    const user = await User.findByPk(req.session.userId);
    let timer = await user.getTimer();
    if (!timer) {
        timer = { dataValues: null }
    }
    res.status(200).json(timer.dataValues)
})

router.put('/', async (req, res) => {
    try {
        const user = await User.findByPk(req.session.userId);
        let timer = await user.getTimer();
        const timestamp = moment().unix();
        if (!timer) {
            timer = await Timer.create({
                amount: req.body.amount,
                timestamp: timestamp,
            });
            await timer.setUser(user);
        } else {
            timer.amount = req.body.amount;
            timer.timestamp = timestamp;
            await timer.save();
        }

        res.status(200).json(timer);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router
