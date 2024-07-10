// IMPORTS
import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBdayDto } from './dto/create-bday.dto';
import { UpdateBdayDto } from './dto/update-bday.dto';
import { Bday } from './models/bday.model';
import { sortBdays } from '../../utils/transformers/sort-bdays';
import { extendBdays, extendBday } from '../../utils/transformers/extend-bdays';
import { markNextBday } from '../../utils/transformers/mark-next-bday';
import {filterDailyBdays} from '../../utils/transformers/filter-daily-bdays';
import {filterWeeklyBdays} from '../../utils/transformers/filter-weekly-bdays';
import { filterMonthlyBdays } from '../../utils/transformers/filter-monthly-bdays';

// INJECTABLE
@Injectable()

// CLASS
export class BdaysService {

  // CONSTRUCTOR
  constructor(
    @InjectModel(Bday) private bdayModel: typeof Bday,
  ) {};

  // CREATE
  async create(bday: CreateBdayDto) {

    // CREATE BDAY
    await this.bdayModel.create(bday, {
      raw: true,
    });

    // GET BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAYS
    const extendedBdays = extendBdays(bdays);

    // MARK NEXT BDAY
    const markedBdays = markNextBday(extendedBdays);

    // SORT BDAYS
    const sortedBdays = sortBdays(markedBdays);

    // RETURN BDAYS
    return sortedBdays;

  };

  // FIND ALL
  async findAll() {

    // GET ALL BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAYS
    const extendedBdays = extendBdays(bdays);

    // MARK NEXT BDAY
    const markedBdays = markNextBday(extendedBdays);

    // SORT BDAYS
    const sortedBdays = sortBdays(markedBdays);

    // RETURN BDAYS
    return sortedBdays;

  };

  // FIND ONE
  async findOne(id: number) {

    // GET BDAY
    const bday = await this.bdayModel.findByPk(id, {
      raw: true,
    });

    // THROW ERROR IF BDAY NOT FOUND
    if (!bday) throw new NotFoundException(`Error: bday not found!`);

    // EXTEND BDAY
    const extendedBday = extendBday(bday);

    // RETURN BDAY
    return extendedBday;

  };

  // FIND DAILY
  async findDaily() {

    // GET BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAY
    const extendedBdays = extendBdays(bdays);

    // FILTER CURRENT
    const dailyBdays = filterDailyBdays(extendedBdays);

    // RETURN BDAY
    return dailyBdays;

  };

  // FIND WEEKLY
  async findWeekly() {

    // GET BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAY
    const extendedBdays = extendBdays(bdays);

    // FILTER CURRENT
    const weeklyBdays = filterWeeklyBdays(extendedBdays);

    // RETURN BDAY
    return weeklyBdays;

  };

  // FIND WEEKLY
  async findMonthly() {

    // GET BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAY
    const extendedBdays = extendBdays(bdays);

    // FILTER CURRENT
    const monthlyBdays = filterMonthlyBdays(extendedBdays);

    // RETURN BDAY
    return monthlyBdays;

  };

  // UPDATE
  async update(id: number, bday: UpdateBdayDto) {

    // UPDATE BDAY
    await this.bdayModel.update(bday,{
      where: { id: id },
      returning: true,
    });

    // GET UPDATED BDAY
    const updatedBday = await this.bdayModel.findByPk(id, {
      raw: true,
    });

    // EXTEND BDAY
    const extendedBday = extendBday(updatedBday);

    // RETURN BDAY
    return extendedBday;

  };

  // REMOVE
  async remove(id: number) {

    // REMOVE BDAY
    await this.bdayModel.destroy({
      where: { id: id },
    });

    // GET ALL BDAYS
    const bdays = await this.bdayModel.findAll({
      raw: true,
    });

    // EXTEND BDAYS
    const extendedBdays = extendBdays(bdays);

    // SORT BDAYS
    const sortedBdays = sortBdays(extendedBdays);

    // RETURN BDAYS
    return sortedBdays;

  };

}

