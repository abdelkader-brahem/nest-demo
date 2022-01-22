import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs = require('hbs');
import express = require('express');

/*****
 * Author : Brahem Abdelkader
 */

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.use('/images', express.static(join(__dirname, '..', 'images'))); // <-
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
