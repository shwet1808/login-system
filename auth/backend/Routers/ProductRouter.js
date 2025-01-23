const ensureAuthenticated = require('../Middlewares/auth');


const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "CAT",
            price: 10000
        },
        {
            name:"GATE",
            Price:200
        },
        {
            name: "JEE",
            price: 150
        }
    ])
});

module.exports = router;