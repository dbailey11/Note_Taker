//dependency
const express = require('express');

//express configuration
const app = express();

//setting the PORT
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//route
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});