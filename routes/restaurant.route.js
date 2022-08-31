const restaurant_controller = require("../controllers/restaurant.controller");

module.exports = (app) => {
    //This is the route for the Restaurant Saver
    app.post("/fmr/api/restaurant/add", restaurant_controller.createRestaurant);

    //This is the route for all the Restaurant Getter
    app.get("/fmr/api/restaurant", restaurant_controller.getAllRestaurants);


    //This is the route for all the Restaurant's Categories
    app.get("/fmr/api/restaurant/categories", restaurant_controller.getCategories);

    //This is the route for restaurants with categories
    app.get("/fmr/api/restaurant/categories/:category", restaurant_controller.getRestaurantByCategory);

    //This is the route for getting the restaurant by ID
    app.get("/fmr/api/restaurant/:id", restaurant_controller.getRestaurantsById);

    //This is the route for getting the restaurant by Rating
    app.get("/fmr/api/restaurant/rating/:ratingValue", restaurant_controller.getRestaurantsByRating);


    //This is the route for Updatting a particular restaurant
    app.put("/fmr/api/restaurant/:id",restaurant_controller.updateRestaurant);
}