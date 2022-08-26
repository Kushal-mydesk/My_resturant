const Restaurant = require("../models/restaurant.model");

exports.createRestaurant = async (req,res) => {


    try{
        //taking the values on req 
        const reqObj = {
            name : req.body.name,
            description : req.body.description,
            category :  req.body.category,
            imageURL : req.body.imageURL,
            location : req.body.location,
            phone : req.body.phone,
            rating: req.body.rating
        };

        const restaurantCreated = await Restaurant.create(reqObj);

        res.status(201).send(restaurantCreated);





    }catch(err){
        console.log("Error creating restaurant: " + err.message);
        res.status(500).send({
            message : "Some Internal Server Error"
        });
    }
}