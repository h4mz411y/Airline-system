'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 3030;

const ioServer = require('socket.io')(PORT);

const { faker } = require('@faker-js/faker');



const airline = 'Royal Jordanian Airlines';
const flightId = faker.datatype.uuid();
const pilotName = faker.name.findName();
const destination = faker.address.cityName();




//namespace
const airlineSystem = ioServer.of('/airline');
airlineSystem.on('connection', (socket) => {
    console.log('connected to airline ', socket.id);
    socket.on('new-flight', () => {
      airlineSystem.emit('took-off', tookoffAlert);
    });
});

// Start a socket.io server on a specific port (add the port number to the .env file). 



ioServer.on('connection', (socket) => {
  console.log('connected to server', socket.id);

  socket.on('new-flight', () => {
    NewFlight();
    airlineSystem.emit('new-flight');
  });
  socket.on('Arrived', arriveAlert);
  socket.on('Arrived', () => {
    airlineSystem.emit('Arrived');
  });


});

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







