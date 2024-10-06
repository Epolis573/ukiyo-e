//Import

const express = require('express')
const app = express()
const port = 3000

const artworks = require('./artworks');
// Static
app.use(express.static(__dirname + "/public/"));

// Set Views
app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs')


app.get('', (req, res) => {
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/gallery', (req, res) => {
    res.render('./gallerypage/gallery')
})
app.get('/exhibition', (req, res) => {
    res.render('./exhibition/exhibition')
})
// Dynamic routes
app.get('/gallery/:artId', (req, res) => {
    const artId = req.params.artId;

    // Define artworks' data
  

    // Check if the artId exists in the artworks object
    if (artworks[artId]) {
        res.render('./gallerypage/art', { images: artworks[artId] });
    } else {
        res.status(404).send('Artwork not found');
    }
});
/*app.get('/gallery/art1', (req, res) => {
    res.render('./gallerypage/art1')
})
app.get('/gallery/art2', (req, res) => {
    res.render('./gallerypage/art2')
})
app.get('/gallery/art3', (req, res) => {
    res.render('./gallerypage/art3')
})
app.get('/gallery/art4', (req, res) => {
    res.render('./gallerypage/art4')
})
app.get('/gallery/art5', (req, res) => {
    res.render('./gallerypage/art5')
})
app.get('/gallery/art6', (req, res) => {
    res.render('./gallerypage/art6')
})
app.get('/gallery/art7', (req, res) => {
    res.render('./gallerypage/art7')
})
app.get('/gallery/art8', (req, res) => {
    res.render('./gallerypage/art8')
}) */

// Listen
app.listen(port, () => console.info(`Listen on port ${port}`))
