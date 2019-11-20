const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const bcrypt = require('bcrypt')



router.get('/', (req,res) => {
    res.json({
        message: 'AUTH'
    })
})

function validUser(user) {
    const validEmail = 
        typeof user.email == 'string' && user.email.trim() != '';
    const validPassword = 
        typeof user.password == 'string' 
        && user.password.trim() != ''
        && user.password.trim().length >= 6
    return validEmail && validPassword
}

router.post('/signup', (req, res, next) => {
    if(validUser(req.body)) {
        queries.getOneByEmail(req.body.email)
        .then(user => {
            console.log(user)
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
    if(validUser(req.body)) {
        queries.getOneByEmail(req.body.email)
        .then(user => {
            if(user) {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((result) => {
                        if(result) {
                            const isSecure = req.app.get('env') != 'development'
                            res.cookie('user_id', user.id, {
                                httpOnly: true,
                                signed: true,
                                secure: isSecure
                            })
                            res.json({
                                message: 'Logged In'
                            })
                    }})
            }
        })
    } else {
        next(new Error('Invalid Login'))
    }
})

module.exports = router