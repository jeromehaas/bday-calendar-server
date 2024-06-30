// IMPORTS
import { Module } from '@nestjs/common';
import { BdaysService } from './bdays.service';
import { BdaysController } from './bdays.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bday } from './models/bday.model';

// MODULE
@Module({
  imports: [SequelizeModule.forFeature([Bday])],
  controllers: [BdaysController],
  providers: [BdaysService],
})

// EXPORTS
export class BdaysModule {}
