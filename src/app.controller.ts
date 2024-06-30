// IMPORTS
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// CONTROLLER
@Controller()

// CLASS
export class AppController {

  // CONSTRUCTOR
  constructor(private readonly appService: AppService) {}

  // GET REQUEST
  @Get()

  // GET HELLO
  getHello(): string {

    // RETURN
    return this.appService.getHello();

  };

}
