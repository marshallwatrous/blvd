const express = require('express')
const router = express.Router();


///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    res.render('index.ejs')
})

///////// 🆕 NEW ROUTE //////////////()
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

///////// 👩‍🎨 CREATE ROUTE //////////////
router.post('/', (req, res) => {
    res.redirect('/blvd')
})

///////// 🎙 SHOW ROUTE //////////////
router.get('/:userId', (req, res) => {
    res.render('show.ejs')
})




module.exports = router;