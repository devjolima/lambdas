import { Injectable } from "@nestjs/common";




@Injectable()
export class SqsService {
    
    async sendMessage(message) {
        const { Producer } = require('sqs-producer');

        // create simple producer
        const producer = Producer.create({
            queueUrl: 'https://sqs.us-east-1.amazonaws.com/238327465212/QueueDemo',
            region: 'us-east-1',
        });

        console.log("SERVICE MESSAGE -- " +JSON.stringify(message));
    
        try {
            await producer.send([{
                id: 'id',
                body: JSON.stringify(message)
              }]);  
        } catch (error) {
            console.log(error);
        }

    }

}
