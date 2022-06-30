const { Restaurant } = require('./restaurant');

const alexRestaurant = new Restaurant();
let tableCount = 25;
alexRestaurant
    .once('open', () => console.log('Restaurant open!'))
    .once('reserveTable', () => {
        tableCount -= 1;
        console.log(`Table reserved! We still have ${tableCount} tables to use! | 'Free tables: ${tableCount}'`)
    })
    .once('cancelTable', () => {
        tableCount += 1;
        console.log(`Our customer called and declined a reservation. | 'Free tables: ${tableCount}'`)
    })
    .once('takeTableWithoutReservation', () => {
        tableCount -= 1;
        console.log(`Thanks to God! Random customer arrived! | 'Free tables: ${tableCount}'`)
    })
    .once('broken', () => {
        tableCount -= 1;
        console.log(`Boss, I just realized that one table is kinda broken, we got some cracks on it. Let me repair it. | Free tables: ${tableCount}`);
    })
    .once('clean', () => {
        tableCount += 1;
        console.log(`Our customer finished the dinner, let's clean the table! | Free tables: ${tableCount}`);
    })
    .once('close', () => {
        console.log(`Okay the shift is over, let's close the Restaurant | Tables amount ${tableCount}`);
    })

alexRestaurant.open();

alexRestaurant.takeTableWithoutReservation();

alexRestaurant.takeTableWithoutReservation();

alexRestaurant.reserveTable();

alexRestaurant.cancelTableReservation();

alexRestaurant.reserveTable();

alexRestaurant.reserveTable();

alexRestaurant.takeTableWithoutReservation();

alexRestaurant.takeTableWithoutReservation();

alexRestaurant.cleanUpTable();

alexRestaurant.markTableAsBroken();

alexRestaurant.close();
