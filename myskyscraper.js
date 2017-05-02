//build a skyscraper! Weeeee!


function myskyscraper(floors) {
    var i;
    if (typeof floors === 'undefined') {
        floors = 10;
    }
    //bookmark drone position to return later
    this.chkpt('myskyscraper');
    for ( i = 0; i < floors; i++ ) {
        //create primary building structure
        if ((i >= 1) && (i < floors.length)) {
        this
        .box(blocks.iron,20,1,20)
        .up()
        .box0(blocks.glass_pane,20,3,20)
        .up(3);
            //if it's the lowest level, make a doorway.
        } else if (i < 1) {
            this
            .box(blocks.iron,20,1,20)
            .up()
            .box0(blocks.glass_pane,20,3,20)
            //clear space for doorway.
            .right(2)
            .box(0,1,2,1) 
            .up(3)
            .left(2);  
            //if it's the top level, add a roof.
            }else{
                this
                .box(blocks.iron,20,1,20)
                .up()
                .box0(blocks.glass_pane,20,3,20)
                .up(3)
                .box(blocks.iron,20,1,20);
            }
        }
    //return drone to starting point.
    this.move('myskyscraper');
};

var Drone = require('drone');
Drone.extend( myskyscraper );
