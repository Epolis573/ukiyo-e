//Import

const express = require('express')
const app = express()
const port = 3000


// Static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/favicons', express.static(__dirname + 'public/favicons'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))


// Set Views
app.set('views', (__dirname, './views'));
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
app.get('/gallery/art1', (req, res) => {
    res.render('./gallerypage/aw202301')
})

// Listen
app.listen(port, () => console.info(`Listen on port ${port}`))