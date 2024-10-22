# Kafka Node.js Message Producer and Consumer

This repository demonstrates a basic setup to produce and consume messages using **Apache Kafka** and **Node.js**. The project includes a Dockerized Kafka and Zookeeper environment and two Node.js scripts: one for producing messages and one for consuming them.

## Table of Contents

- Prerequisites
- Setup
- Kafka Setup with Docker
- Running the Producer and Consumer
- Testing with Kafka CLI
- Resources

## Prerequisites

Make sure you have the following installed:

- Docker and Docker Compose
- Node.js (v12 or higher)
- npm or yarn

## Setup

1. Clone the repository:
    ```bash
   git clone https://github.com/your-username/kafka-nodejs-message-producer-consumer.git
   cd kafka-nodejs-message-producer-consumer

2. Install dependencies:

    ```bash
   npm install
   ```

## Kafka Setup with Docker

To set up Kafka and Zookeeper using Docker Compose:

1. Start Kafka and Zookeeper using Docker Compose:
    ```bash
   docker-compose up -d

2. Verify that both Kafka and Zookeeper are running:
   ```bash
   docker ps

3. You can check the logs for Kafka to ensure everything is running smoothly:
    ```bash
   docker logs <kafka_container_id>

## Running the Producer and Consumer

### Producer

The producer sends messages to a Kafka topic.

1. Run the producer script:
    ```bash
   npm run produce

2. The producer will send messages to the Kafka topic.

### Consumer

The consumer reads messages from a Kafka topic.

1. Run the consumer script:
    ```bash
   node run consume

2. The consumer will consume and display the messages.

## Testing with Kafka CLI

You can also test Kafka manually using the Kafka CLI tools:

### Create a Kafka topic (example for a topic named 'test-topic'):
    
   docker exec -it <kafka_container_id> /bin/bash
   kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

### Produce messages manually:

   kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092

### Consume messages manually:

   kafka-console-consumer.sh --topic test-topic --bootstrap-server localhost:9092 --from-beginning

## Resources

- Apache Kafka Documentation: https://kafka.apache.org/documentation/
- Node.js Kafka Client - KafkaJS: https://kafka.js.org/
- Docker Documentation: https://docs.docker.com/
