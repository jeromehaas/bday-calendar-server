// IMPORTS
import { Injectable } from '@nestjs/common';

// INJECTABLE
@Injectable()

// CLASS
export class AppService {

  // GET HELLO
  getHello(): string {

    // RETURN
    return 'Hello World!';

  };

}
