//---------Event Driven Code--------//
const EventEmitter = require("node:events");

class Shop extends EventEmitter
{
    constructor()
    {
        super();
        this.order = 0;
    }

    placeOrder()
    {
        this.order++;
        this.emit("order");
    }

}

module.exports = new Shop();

//---------Normal--------//
// class Shop 
// {
//     constructor()
//     {
        
//         this.order = 0;
//     }

//     placeOrder()
//     {
//         this.order++;
//         console.log("order is placed");
//     }

// }

// module.exports = new Shop();