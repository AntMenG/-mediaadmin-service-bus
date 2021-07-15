import { enviroment as env } from './config/enviroment';
import { ServiceBusClient } from '@azure/service-bus';

/**
 * Send message to azure service bus
 * @param queue - Queue name.
 * @param message - Payload message (json)
 */
export const send = async (queue: string, message: any): Promise<void> => {
  const serviceBusClient = new ServiceBusClient(env.SERVICE_BUS);
  const sender = serviceBusClient.createSender(queue);
  const encodedMessage = message;
  console.log('Sent to "%s" message %s', queue, encodedMessage);
  await sender.sendMessages({ body: encodedMessage });
  await sender.close();
  await serviceBusClient.close();
}

/**
 * Receive message from azure service bus
 * @param queue - Queue name.
 * @param handler - Recibe message (json)
 */
export const receive = async (queue: string, handler: any): Promise<void> => {
  const serviceBusClient = new ServiceBusClient(env.SERVICE_BUS);
  const receiver = serviceBusClient.createReceiver(queue);
  console.log('Listening for messages on queue "%s"', queue);
  receiver.subscribe({
    processMessage: async (message) => handler(message.body),
    processError: async (error) => console.log(error)
  });
};