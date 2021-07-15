
# @mediaadmin/service-bus

It's a NodeJS library for use Azure Service Bus

## Installation

Use the package manager npm to install.

```bash
npm i --save @mediaadmin/service-bus
```

## Usage

Define the environment variables

  Variable  | Example Value
------------- | -------------
SERVICE_BUS  | Endpoint=sb://domain.servicebus.windows.net/;SharedAccessKeyName=user;SharedAccessKey=**********

### Create 

To create a new queue on azure service bus you can use the next function

```javascript
(alias) const create: (queueName: string) => Promise<boolean>
```
Example:

```typescript
const { create } = require('@mediaadmin/service-bus');

create('xiaomi').then(res => {
    console.log(res); // true : false
});
```

### Delete

To delete a queue on azure service bus you can use the next function
```javascript
(alias) const remove: (queueName: string) => Promise<boolean>
```

Example:

```typescript
const { remove } = require('@mediaadmin/service-bus');

remove('xiaomi').then(res => {
    console.log(res); // true : false
});
```

### Send Message

To send a message to specific queue on azure service bus you can use the next function
```javascript
(alias) const send: (queue: string, message: any) => Promise<void>
```

Example:

```typescript
const { send } = require('@mediaadmin/service-bus');

send('xiaomi', { model: 'MI 9T pro' });
```

### Recive Messages

To recibe a messages from specific queue on azure service bus you can use the next function
```javascript
(alias) const receive: (queue: string, handler: any) => Promise<void>
```

Example:

```typescript
const { receive } = require('@mediaadmin/service-bus');

receive('xiaomi', message => {
    console.log(message); // any (json)
})
.catch(console.error);
```