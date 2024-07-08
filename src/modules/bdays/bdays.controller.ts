// IMPORTS
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BdaysService } from './bdays.service';
import { CreateBdayDto } from './dto/create-bday.dto';
import { UpdateBdayDto } from './dto/update-bday.dto';

// CONTROLLERS
@Controller('bdays')

// CLASS
export class BdaysController {

  // CONSTRUCTOR
  constructor(private readonly bdaysService: BdaysService) {}

  // POST
  @Post()
  async create(@Body() createBdayDto: CreateBdayDto) {

    // CREATE BDAY
    const bday = await this.bdaysService.create(createBdayDto);

    // SEND RESPONSE
    return {
      success: true,
      message: 'Success: bday has been created!',
      data: {
        bday: bday,
      },
    };

  };

  // GET
  @Get()
  async findAll() {

    // GET BDAYS
    const bdays = await this.bdaysService.findAll();

    // SEND RESPONSE
    return {
      success: true,
      message: 'Success: bdays has been found!',
      data: {
        bdays: bdays,
      },
    };

  };

  // GET BY ID
  @Get(':id')
  async findOne(@Param('id') id: number) {

    // GET BDAY
    const bday = await this.bdaysService.findOne(id);

    // SEND RESPONSE
    return {
      success: true,
      message: 'Success: bday has been found!',
      data: {
        bday: bday,
      },
    };

  };

  // PATCH BY ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBdayDto: UpdateBdayDto) {

    // UPDATE BDAY
    const bday = await this.bdaysService.update(+id, updateBdayDto);

    // SEND RESPONSE
    return {
      success: true,
      message: 'Success: bday has been updated!',
      data: {
        bday: bday,
      },
    };

  };

  // DELETE
  @Delete(':id')
  async remove(@Param('id') id: string) {

    // DELETE BDAY
    const bday = await this.bdaysService.remove(+id);

    // SEND RESPONSE
    return {
      success: true,
      message: 'Success: bday has been deleted!',
      data: {
        bday: bday,
      },
    };

  };

}
