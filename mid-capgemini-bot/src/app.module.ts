import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsAppModule } from './modules/sqs/sqs.module';
import { SqsService } from './modules/sqs/sqs.service';


@Module({
  imports: [SqsAppModule],
  controllers: [AppController],
  providers: [AppService, SqsService],
})
export class AppModule {}
