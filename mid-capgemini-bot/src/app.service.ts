import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Poll } from './model/Poll';

@Injectable()
export class AppService {




  getHello(): string {
    return 'Hello World Jonjon!';
  }

  async getMessagesSQS(): Promise<any> {

  }
}
