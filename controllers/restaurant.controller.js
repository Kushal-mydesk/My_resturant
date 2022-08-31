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

exports.getCategories = async(req,res) => {
    try{
        const restaurant_category = await Restaurant.distinct("category");
        res.status(200).send(restaurant_category);
    }catch(err){
        console.log("Some error while", err.message);
        res.status(500).send({
            message: "Some error occurred while fetching Categories"
        });
   }
}


exports.getRestaurantByCategory = async(req, res) => {
    
    try{

        const restaurant = await Restaurant.find({category : req.params.category});
        if(!restaurant){
            return res.status(404).send({});
        }
        res.status(200).send(restaurant);

    }catch(err){
        console.log("Some error while", err.message);
        res.status(500).send({
            message: "Some error occured while fetching the Restaurant"
        });
    }
}


exports.getRestaurantsById = async(req, res) => {
    try{

        const restaurant = await Restaurant.findOne({_id : req.params.id});
        if(!restaurant){
            return res.status(404).send({
                message : "No Restaurant found with the given ID"
            });
        }

        res.status(200).send(restaurant);

    }catch(err){
        console.log("Some error while", err.message);
        res.status(500).send({
            message :  "Some error occured while fetching the Restaurant"
        })
    }
}

exports.getRestaurantsByRating = async(req, res) => {
    try{

        
        const restaurant = await Restaurant.find({rating:{$gte:req.params.ratingValue}});
        
        if(!restaurant){
            return res.status(404).send({
                message : "No Restaurant found with the given Rating or more than that"
            });
        }
        

        res.status(200).send(restaurant);

    }catch(err){
        console.log("Some error while", err.message);
        res.status(500).send({
            message :  "Some error occured while fetching the Restaurant"
        })
    }
}


