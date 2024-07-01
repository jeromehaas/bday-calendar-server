// IMPORTS
import { Column, Model, Table } from 'sequelize-typescript';

// TABLE
@Table

// CLASS
export class Bday extends Model<Bday> {

  // FIRSTNAME
  @Column
  firstname: string;

  // FIRSTNAME
  @Column
  lastname: string;

  // BIRTHDATE
  @Column({ field: 'birth_date', type: 'DATE' })
  birthDate: Date;

}