import { QueueRuntimeProperties, WithResponse } from '@azure/service-bus';
/**
 * Create a new queue in azure service bus
 * @param queueName - Name of the new queue
 */
export declare const create: (queueName: string) => Promise<boolean>;
/**
 * Remove a queue in azure service bus
 * @param queueName - Name of the queue
 */
export declare const remove: (queueName: string) => Promise<boolean>;
/**
 * Get a queue in azure service bus
 * @param queueName - Name of the queue
 */
export declare const get: (queueName: string) => Promise<WithResponse<QueueRuntimeProperties>>;
