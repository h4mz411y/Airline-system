'use strict';

const events = require("./events-pool");
const { faker } = require('@faker-js/faker');
require('./pilot');


const airline = 'Royal Jordanian Airlines';
const flightId = faker.datatype.uuid();
const pilotName = faker.name.findName();
let destination = faker.address.cityName();

events.on('new-flight', NewFlight);
events.on('took-off', tookoffAlert);
events.on('Arrived', arriveAlert);


function NewFlight() {
  let NewFlight = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot:pilotName,
        destination:destination,
      },
    },
  };
  console.log(NewFlight);
}
function tookoffAlert() {
  let NewFlight = {
    Flight: {
      event: 'took_off',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot: pilotName,
        destination: destination,
      },
    },
  };
  console.log(NewFlight);
  console.log(NewFlight);
}
function arriveAlert() {
  let NewFlight = {
    Flight: {
      event: 'arrived',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot: pilotName,
        destination: destination,
      },
    },
  };
  console.log(NewFlight);
}