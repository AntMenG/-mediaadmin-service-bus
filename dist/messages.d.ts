/**
 * Send message to azure service bus
 * @param queue - Queue name.
 * @param message - Payload message (json)
 */
export declare const send: (queue: string, message: any) => Promise<void>;
/**
 * Receive message from azure service bus
 * @param queue - Queue name.
 * @param handler - Recibe message (json)
 */
export declare const receive: (queue: string, handler: any) => Promise<void>;
