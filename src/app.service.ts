import { Injectable } from '@nestjs/common';

/*****
 * Author : Brahem Abdelkader
 */

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
  getroot():string{
    return "<h1>Hello</h1>"
  }
}
