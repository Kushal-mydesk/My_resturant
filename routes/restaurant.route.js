const restaurant_controller = require("../controllers/restaurant.controller");

module.exports = (app) => {
    app.post("/fmr/api/restaurant/add", restaurant_controller.createRestaurant)
}