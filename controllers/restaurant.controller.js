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
            message : "Some error occurred while creating the Restaurant."
        });
    }
}


exports.getAllRestaurants = async(req,res) => {
    try{

        let restaurants = await Restaurant.find({});
        res.status(200).send({
            restaurants : restaurants,
            message : "Restaurants fetched successfully."
        });
    }catch(err){
        console.log("Error getting all restaurants: " + err.message);
        res.status(500).send({
            message : "Some error occured while fetching the Restaurants."
        })

    }
}