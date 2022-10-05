const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    return res.render("index")
});

router.get('/login',(req, res) => { return res.render('login')});
router.get('/registrarse',(req, res) => {
    res.render('register')
});
router.get('/create-vehicles',(req, res) => { return res.render('create-vehicles')});
router.get('/vehicle/:id',(req, res) => { return res.render('product')});
module.exports = router;

