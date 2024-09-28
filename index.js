//Import

const express = require('express')
const app = express()
const port = 3000


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
// Dynamic routes
app.get('/gallery/:artId', (req, res) => {
    const artId = req.params.artId;

    // Define artworks' data
    const artworks = {
        art1: {
            art_head: '/gallerypage/img/work/sp/aw202301.png',
            art_head1: '/gallerypage/img/work/pc/aw202301.png',
           
        },
        art2: {
            art_head: '/gallerypage/img/work/pc/aw202202.png',
            art_head1: '/gallerypage/img/work/pc/aw202202.png',
            
        },
        art3: {
            art_head: '/gallerypage/img/work/pc/aw202104.png',
            art_head1: '/gallerypage/img/work/pc/aw202104.png',
            
        },
        art4: {
            art_head: '/gallerypage/img/work/pc/aw202103.png',
            art_head1: '/gallerypage/img/work/pc/aw202103.png',
        
        },
        art5: {
            art_head: '/gallerypage/img/work/pc/aw202102.png',
            art_head1: '/gallerypage/img/work/pc/aw202102.png',
            
        },
        art6: {
            art_head: '/gallerypage/img/work/pc/aw202101.png',
            art_head1: '/gallerypage/img/work/pc/aw202101.png',
            
        },
        art7: {
            art_head: '/gallerypage/img/work/pc/aw201902.png',
            art_head1: '/gallerypage/img/work/pc/aw201902.png',
            
        },
        art8: {
            art_head: '/gallerypage/img/work/pc/aw201901.png',
            art_head1: '/gallerypage/img/work/pc/aw201901.png',
            
        },
        art9: {
            art_head: '/gallerypage/img/work/pc/aw201801.png',
            art_head1: '/gallerypage/img/work/pc/aw201801.png',
            
        },
        art10: {
            art_head: '/gallerypage/img/work/pc/aw201401.png',
            art_head1: '/gallerypage/img/work/pc/aw201401.png',
            
        },
        art11: {
            art_head: '/gallerypage/img/work/sp/aw201301.png',
            art_head1: '/gallerypage/img/work/sp/aw201301.png',
            
        },
        art12: {
            art_head: '/gallerypage/img/work/pc/aw201202.png',
            art_head1: '/gallerypage/img/work/pc/aw201202.png',
            
        },
        art13: {
            art_head: '/gallerypage/img/work/pc/aw201201.png',
            art_head1: '/gallerypage/img/work/pc/aw201201.png',
            
        },
        art14: {
            art_head: '/gallerypage/img/work/pc/aw201003.png',
            art_head1: '/gallerypage/img/work/pc/aw201003.png',
            
        },
        art15: {
            art_head: '/gallerypage/img/work/pc/aw201002.png',
            art_head1: '/gallerypage/img/work/pc/aw201002.png',
            
        },
        art16: {
            art_head: '/gallerypage/img/work/pc/aw201001.png',
            art_head1: '/gallerypage/img/work/pc/aw201001.png',
            
        },
        art17: {
            art_head: '/gallerypage/img/work/pc/aw2011011.png',
            art_head1: '/gallerypage/img/work/pc/aw2011011.png',
            
        },   
    };

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
