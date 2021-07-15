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
