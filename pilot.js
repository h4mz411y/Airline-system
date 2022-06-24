'use strict';

const events = require('./events-pool');
const { faker } = require('@faker-js/faker');
require('./system');

const flightId = faker.datatype.uuid();




events.on('new-flight', pilot);
function pilot() {
  setTimeout(() => {
    let tookoffAlert = `flight number ${flightId} Just took-off`;
    console.log(tookoffAlert);
    events.emit('took-off', tookoffAlert);
  }, 4000);

  setTimeout(() => {
    let arriveAlert = `flight number ${flightId} has arrived to destination`;
    console.log(arriveAlert);
    events.emit('Arrived', arriveAlert);
  }, 7000);

}
