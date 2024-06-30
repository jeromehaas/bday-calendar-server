// IMPORTS
import { Module } from '@nestjs/common';
import { DatabaseModule} from './modules/database/database.module';
import { BdaysModule } from './modules/bdays/bdays.module';
import { ConfigModule } from '@nestjs/config';

// MODULE
@Module({
  imports: [
    DatabaseModule,
    BdaysModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})

// EXPORTS
export class AppModule {}
