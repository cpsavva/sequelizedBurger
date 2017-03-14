/*Dependencies*/


const bodyParser = require('body-parser');
const override = require('method-override');
const exhandle = require('express-handlebars');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/*model sync */
const models = require('./models');
models.sequelize.sync();

/*use of /public content */
app.use(express.static(__dirname + '/public'));

/*Parse application/x-www-form-urlencoded*/
app.use(bodyParser.urlencoded({extended: false}));

/*use of override */
app.use(override('_method'));

/*use of handlebars*/
app.engine('handlebars', exhandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*require routes*/
require('./routes/api-routes.js')(app);

/*starting express server*/
app.listen(port, function(){
	console.log("I am working")
});