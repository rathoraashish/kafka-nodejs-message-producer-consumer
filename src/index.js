const { produceMessage } = require('./producer');
const { startConsumer } = require('./consumer');

async function main() {
  console.log('Starting Kafka Node.js Project');
  
  // Start the consumer
  startConsumer();

  // Produce a message every 5 seconds
  setInterval(() => {
    const message = `Hello Kafka! Time: ${new Date().toISOString()}`;
    produceMessage(message);
  }, 5000);
}

main().catch(console.error);