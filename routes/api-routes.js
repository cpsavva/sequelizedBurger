/*Dependencies*/

const models = require('../models');



/*Routes*/

module.exports = function(app){

	/*display all*/
	app.get('/', function(request, response){
		models.burger.findAll({})
        .then(function(burger_data){
        	console.log(burger_data);

          	response.render('index', {burger_data});
        });
	});

	/*update devoured condition*/
	app.put('/burgers/update', function(request, response){
		models.burger.update({
			devoured : true
        }, 
      	{
          where: {
            id: request.body.id
        }
	    }).then(function(result){
	    	console.log(result);

	    	// response.redirect('/');
	    });
	});

	/*insert new burger*/
	app.post('/burgers/create', function(request, response){
		console.log(request.body.burger_name);
		models.burger.create({

			burger_name: request.body.burger_name

		}).then(function(result){
			console.log(response)
			
			response.redirect('/');
		}).catch(function(err){
      response.status(500).send();
    });
	});

};