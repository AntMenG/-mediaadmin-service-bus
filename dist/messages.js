"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.receive = exports.send = void 0;
const enviroment_1 = require("./config/enviroment");
const service_bus_1 = require("@azure/service-bus");
/**
 * Send message to azure service bus
 * @param queue - Queue name.
 * @param message - Payload message (json)
 */
const send = (queue, message) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceBusClient = new service_bus_1.ServiceBusClient(enviroment_1.enviroment.SERVICE_BUS);
    const sender = serviceBusClient.createSender(queue);
    const encodedMessage = message;
    console.log('Sent to "%s" message %s', queue, encodedMessage);
    yield sender.sendMessages({ body: encodedMessage });
    yield sender.close();
    yield serviceBusClient.close();
});
exports.send = send;
/**
 * Receive message from azure service bus
 * @param queue - Queue name.
 * @param handler - Recibe message (json)
 */
const receive = (queue, handler) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceBusClient = new service_bus_1.ServiceBusClient(enviroment_1.enviroment.SERVICE_BUS);
    const receiver = serviceBusClient.createReceiver(queue);
    console.log('Listening for messages on queue "%s"', queue);
    receiver.subscribe({
        processMessage: (message) => __awaiter(void 0, void 0, void 0, function* () { return handler(message.body); }),
        processError: (error) => __awaiter(void 0, void 0, void 0, function* () { return console.log(error); })
    });
});
exports.receive = receive;
