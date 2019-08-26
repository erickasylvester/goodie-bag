const router = require('express').Router();
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
    try {
      const result = await Candy.findAll();
        res.json(result);
    }
    catch (err){
      next(err)
    }
})

module.exports = router