import { AppService } from './app.service';
import { Poll } from './model/Poll';
import { SqsService } from './modules/sqs/sqs.service';
export declare class AppController {
    private readonly appService;
    private readonly sqsService;
    constructor(appService: AppService, sqsService: SqsService);
    getHello(): string;
    sendMessage(message: Poll): Promise<void>;
}
