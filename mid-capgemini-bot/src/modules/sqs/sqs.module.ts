import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SqsController } from './sqs.controller';
import { SqsService } from './sqs.service';


@Module({
  imports: [
    SqsModule.register({
      consumers: [],
      producers: [],
    }),
  ],
  controllers: [SqsController],
  providers: [SqsService]
})

export class SqsAppModule {}
