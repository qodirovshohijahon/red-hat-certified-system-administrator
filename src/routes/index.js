// Import our Controllers

const carController = require('../contollers/carController')

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        mathod: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
//        schema: documentation.addCarSchema 
    },
    {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
    }
]


module.exports = routes