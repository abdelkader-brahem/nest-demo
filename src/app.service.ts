import { Injectable } from '@nestjs/common';

/*****
 * Author : Brahem Abdelkader
 */

@Injectable()
export class AppService {
  getroot():string{
    return "<h1>Hello</h1>"
  }
}
