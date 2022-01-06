import { Controller, Get, Render } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/root")
  getroot():string{
    return this.appService.getroot();
  }
  
  @Get("/views")
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}