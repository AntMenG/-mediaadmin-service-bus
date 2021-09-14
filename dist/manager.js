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
exports.get = exports.remove = exports.create = void 0;
const enviroment_1 = require("./config/enviroment");
const service_bus_1 = require("@azure/service-bus");
/**
 * Create a new queue in azure service bus
 * @param queueName - Name of the new queue
 */
const create = (queueName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceBusAdministrationClient = new service_bus_1.ServiceBusAdministrationClient(enviroment_1.enviroment.SERVICE_BUS);
        const createQueueResponse = yield serviceBusAdministrationClient.createQueue(queueName);
        console.log(`Created queue with name - ${createQueueResponse.name}`);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.create = create;
/**
 * Remove a queue in azure service bus
 * @param queueName - Name of the queue
 */
const remove = (queueName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceBusAdministrationClient = new service_bus_1.ServiceBusAdministrationClient(enviroment_1.enviroment.SERVICE_BUS);
        yield serviceBusAdministrationClient.deleteQueue(queueName);
        console.log(`Deleted Queue ${queueName}`);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.remove = remove;
/**
 * Get a queue in azure service bus
 * @param queueName - Name of the queue
 */
const get = (queueName) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceBusAdministrationClient = new service_bus_1.ServiceBusAdministrationClient(enviroment_1.enviroment.SERVICE_BUS);
    return yield serviceBusAdministrationClient.getQueueRuntimeProperties(queueName);
});
exports.get = get;
