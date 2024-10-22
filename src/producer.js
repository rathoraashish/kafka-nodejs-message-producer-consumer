const kafka = require('./config/kafka');
const producer = kafka.producer();

async function produceMessage(message) {
  try {
    await producer.connect();
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ value: message }],
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error producing message:', error);
  } finally {
    await producer.disconnect();
  }
}

if (require.main === module) {
  const message = process.argv[2] || 'Hello Kafka!';
  produceMessage(message);
}

module.exports = { produceMessage };