const { Router } = require('express');
const isLogin = require('../public/js/global');

const router = Router();

router.get('/',(req, res) => {
    if(isLogin){
        return res.render("index")
    }
    res.render('login')
});
router.get('/registrarse',(req, res) => {
    res.render('register')
});

module.exports = router;
isLogin