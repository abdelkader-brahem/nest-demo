import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
  getroot():string{
    return "Hello wold with /dev root"

  }
}
