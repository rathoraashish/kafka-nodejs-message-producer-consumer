const { Kafka } = require('kafkajs');
require('dotenv').config();

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: process.env.KAFKA_BROKERS.split(',')
});

module.exports = kafka;