const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  open() {
    this.emit('open');
  }

  close() {
    setInterval(() => this.emit('close'), 12000);
  }

  reserveTable() {
    setInterval(() => this.emit('reserveTable'), 2000);
  }

  cancelTableReservation() {
    setInterval(() => this.emit('cancelTable'), 4000);
  }

  takeTableWithoutReservation() {
    setInterval(() => this.emit('takeTableWithoutReservation'), 6000);
  }

  markTableAsBroken() {
    setInterval(() => this.emit('broken'), 8000);
  }

  cleanUpTable() {
    setInterval(() => this.emit('clean'), 10000);
  }
}

module.exports = {
  Restaurant,
};
