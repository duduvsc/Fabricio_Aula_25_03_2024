const express = require('express')
const mongoose = require('mongoose');


const app = express()
const port = 3000
mongoose.connect('mongodb+srv://duduvsc:lumbriga@fabricioprova.kcwmy6m.mongodb.net/?retryWrites=true&w=majority&appName=FabricioProva');

const Cat = mongoose.model('Film', { 
    
    title: String ,
    desciption: String,
    image_url: String,
    trailer_url: String,


});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.title,
        desciption: req.body.desciption,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    })

    await film.save()
    res.send(film)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})