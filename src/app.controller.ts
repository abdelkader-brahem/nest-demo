import { Controller, Get, Render } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

/*****
 * Author : Brahem Abdelkader
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
