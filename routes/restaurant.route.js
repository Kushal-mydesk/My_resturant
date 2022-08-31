const restaurant_controller = require("../controllers/restaurant.controller");

module.exports = (app) => {
    //This is the route for the Restaurant Saver
    app.post("/fmr/api/restaurant/add", restaurant_controller.createRestaurant);

    //This is the route for all the Restaurant Getter
    app.get("/fmr/api/restaurant", restaurant_controller.getAllRestaurants);


}