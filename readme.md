This Code is For the Hackathon 2
# Port : 
    The Port Number is on the server.config file in "configs" folder, Its 8080

## Dependencies: 
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.5.3"
  

### Here are the Routes For Every Activity
* Routes for Every  Activity

    <p>This is the route for the Restaurant Saver</p>
    <p>"/fmr/api/restaurant/add"   with Post call</p>

    <p>This is the route for all the Restaurant Getter</p>
    <p>"/fmr/api/restaurant"    with Get call</p>

    <p>This is the route for all the Restaurant's Categories</p>
    <p>"/fmr/api/restaurant/categories"   with Get call</p>

    <p>This is the route for restaurants with categories</p>
    <p>"/fmr/api/restaurant/categories/:category"   with get call</p>

    <p>This is the route for getting the restaurant by ID</p>
    <p>"/fmr/api/restaurant/:id"   with get call</p>

    <p>This is the route for getting the restaurant by Rating</p>
    <p>"/fmr/api/restaurant/rating/:ratingValue"   with get call</p>


    <p>This is the route for Updatting a particular restaurant</p>
    <p>"/fmr/api/restaurant/:id" with a put call</p>

    <p>This is the route for deleting a particular restaurant </p>
    <p>"/fmr/api/restaurant/:id" with a delete call</p>

    <p>This is the route for deleting all the restaurants</p>
    <p>"/fmr/api/restaurant" with a delete call</p>