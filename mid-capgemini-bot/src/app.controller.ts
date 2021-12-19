import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Poll } from './model/Poll';
import { SqsService } from './modules/sqs/sqs.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly sqsService: SqsService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/send")
  async sendMessage(@Body() message: Poll){
    console.log(JSON.stringify(message));
    await this.sqsService.sendMessage(message);
  }
}
