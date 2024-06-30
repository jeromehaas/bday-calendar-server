// IMPORTS
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

// CLASS
export class CreateBdayDto {

  // FIRSTNAME
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  // LASTNAME
  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  // DATE
  @IsNotEmpty()
  @IsDateString()
  readonly date: string;

}
