const express = require ('express')

const router = express.Router()

const queries = require('../db/queries')

const authMiddleware = require('../auth/middleware')

router.get('/:id', authMiddleware.allowAccess, (req, res) => {
    if (!isNaN(req.params.id)) {
      queries.getOne(req.params.id).then(user => {
        if (user) {
          delete user.password;
          res.json(user);
        } else {
          resError(res, 404, "User Not Found");
        }
      });
    } else {
      resError(res, 500, "Invalid ID");
    }
  });
  
  router.get('/:id/project', (req,res) => {
    if (!isNaN(req.params.id)) {
      queries.getByUser(req.params.id).then(projects => {
        res.json(projects);
      });
    } else {
      resError(res, 500, "Invalid ID");
    }
  })
  
  function resError(res, statusCode, message) {
    res.status(statusCode);
    res.json({message});
  }

  
  
  module.exports = router;