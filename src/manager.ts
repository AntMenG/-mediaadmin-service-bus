import { enviroment as env } from './config/enviroment';
import { QueueRuntimeProperties, ServiceBusAdministrationClient, WithResponse } from '@azure/service-bus';

/**
 * Create a new queue in azure service bus
 * @param queueName - Name of the new queue
 */
export const create = async (queueName: string): Promise<boolean> => {
    try {
        const serviceBusAdministrationClient = new ServiceBusAdministrationClient(env.SERVICE_BUS);
        const createQueueResponse = await serviceBusAdministrationClient.createQueue(queueName);
        console.log(`Created queue with name - ${ createQueueResponse.name }`);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * Remove a queue in azure service bus
 * @param queueName - Name of the queue
 */
export const remove = async (queueName: string): Promise<boolean> => {
    try {
        const serviceBusAdministrationClient = new ServiceBusAdministrationClient(env.SERVICE_BUS);
        await serviceBusAdministrationClient.deleteQueue(queueName);
        console.log(`Deleted Queue ${ queueName }`);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * Get a queue in azure service bus
 * @param queueName - Name of the queue
 */
export const get = async (queueName: string): Promise<WithResponse<QueueRuntimeProperties>> => {
    const serviceBusAdministrationClient = new ServiceBusAdministrationClient(env.SERVICE_BUS);
    return await serviceBusAdministrationClient.getQueueRuntimeProperties(queueName);
}