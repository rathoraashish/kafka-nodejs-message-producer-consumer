const kafka = require('./config/kafka');
const consumer = kafka.consumer({ groupId: 'my-group' });

async function startConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      },
    });
  } catch (error) {
    console.error('Error consuming messages:', error);
  }
}

if (require.main === module) {
  startConsumer();
}

module.exports = { startConsumer };