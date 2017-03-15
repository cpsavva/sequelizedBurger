/*Dependencies*/

const models = require('../models');



/*Routes*/

module.exports = function(app){

	/*display all*/
	app.get('/', function(request, response){
		models.Customer.findAll({})
        .then(function(burger_data){
        	console.log(burger_data);

          	response.render('index', {burger_data});
        });
	});


	/*insert new customer*/
	app.post('/customers/create', function(request, response){
		console.log(request.body.customer_name);
		models.Customer.create({

			customer_name: request.body.customer_name

		}).then(function(result){
			console.log(response)
			
			response.redirect('/');
		}).catch(function(err){
      response.status(500).send();
    });
	});

	

};