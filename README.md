# Kafka Node.js Message Producer and Consumer

# Prerequisites
# Ensure the following are installed:
# - Docker and Docker Compose
# - Node.js (v12 or higher)
# - npm or yarn

# Project Setup

# Clone the repository:
git clone https://github.com/your-username/kafka-nodejs-message-producer-consumer.git
cd kafka-nodejs-message-producer-consumer

# Install dependencies:
npm install

# Kafka Setup with Docker

# Start Kafka and Zookeeper using Docker Compose:
docker-compose up -d

# Verify that both Kafka and Zookeeper are running:
docker ps

# Check logs for Kafka (optional):
docker logs <kafka_container_id>

# Usage

# Producer
# To produce messages to the Kafka topic, run the producer script:
node producer.js

# Consumer
# To consume messages from the Kafka topic, run the consumer script:
node consumer.js

# Scripts

# Create a Kafka topic (example for a topic named 'test-topic'):
docker exec -it <kafka_container_id> /bin/bash
kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# To produce messages manually (for testing):
kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092

# To consume messages manually (for testing):
kafka-console-consumer.sh --topic test-topic --bootstrap-server localhost:9092 --from-beginning
