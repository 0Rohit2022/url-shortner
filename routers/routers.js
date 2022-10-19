const express = require('express');
const Router  = express.Router();
const server = require('../models/conne')
Router.get('/', async(req,res) => {

    const shorturls = await server.find()
    res.render('home', {
        shorturls: shorturls
    })

   
})


Router.post('/shorturls', async(req,res) => {
    try {
       const full = req.body.fullurl;
       const Server = new server({
        full
       })
       Server.save()
        res.redirect('/')
    } catch (error) {
        res.status(401).send(error)
    }
})
 
Router.get('/:id', async (req,res) => {
    const shortUrl = await server.findOne({short: req.params.id})
    if(shortUrl == null ){
        return res.status(404)
    }
    shortUrl.clicks++
    shortUrl.save();
    res.redirect(shortUrl.full)
    // console.log(shortUrl)
    // console.log(shortUrl.full)
})
module.exports = Router;