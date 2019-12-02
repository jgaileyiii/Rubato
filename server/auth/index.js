const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const bcrypt = require('bcrypt')



router.get('/', (req,res) => {
    res.json({
        message: 'AUTH'
    })
})

function validSignup(user) {
    const validUsername = 
        typeof user.username == 'string'
        && user.username.trim() != ';';
    const validEmail = 
        typeof user.email == 'string' 
        && user.email.trim() != ''
        && user.email.includes('@');
    const validPassword = 
        typeof user.password == 'string' 
        && user.password.trim() != ''
        && user.password.trim().length >= 6;
    return validEmail && validPassword && validUsername
}
function validLogin(user) {
    const validUsername = 
        typeof user.username == 'string'
        && user.username.trim() != '';
    const validPassword = 
        typeof user.password == 'string' 
        && user.password.trim() != ''
        && user.password.trim().length >= 6;
    return validUsername && validPassword
}

function setUserIdCookie(req,res, id) {
    const isSecure = req.app.get('env') != 'development'
    res.cookie('user_id', id, {
        httpOnly: true,
        signed: true,
        secure: isSecure,
        maxAge: 3600000
    })
}

router.post('/signup', (req, res, next) => {
    console.log(req.body)
    if(validSignup(req.body)) {
        queries.getOneByUsername(req.body.username)
        .then(user => {
            if(!user){
               bcrypt.hash(req.body.password, 8)
                .then((hash) => {
                    const user = {
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    }
                    queries.create(user)
                        .then(id => {
                            res.json({
                                id,
                                message: 'HASHED'
                            }) 
                    })
                })
        } else {
                next(new Error ('Email in use'))
            }
        })
        
    } else {
        next(new Error('Invalid User'))
    }
})

router.post('/login', (req, res, next) => {
    if(validLogin(req.body)){
        queries.getOneByUsername(req.body.username)
        .then(user => {
            if(user) {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((result) => {
                        if(result) {
                            setUserIdCookie(req, res, user.id)
                            res.json({
                                message: 'Logged In',
                                username: user.username,
                                userID: user.id
                            })
                    }
                })
            }
        })
    } else {
        next(new Error('Invalid Login'))
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('user_id')
})



module.exports = router