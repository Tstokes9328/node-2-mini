const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)

    //dbInstance.new_planes()
    //     .then((planes) => {
    //         console.log(planes)
    //          }).catch(error => console.log(error))

    dbInstance.get_planes()
        .then((planes) => {
            console.log(planes)
            }).catch(error => console.log(error))
})

app.use( bodyParser.json() );
app.use( cors() );




const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

