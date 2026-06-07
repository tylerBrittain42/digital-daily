import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailiesService } from './dailies.service';
import { CreateDailyDto } from './dto/create-daily.dto';
import { UpdateDailyDto } from './dto/update-daily.dto';

@Controller('dailies')
export class DailiesController {
  constructor(private readonly dailiesService: DailiesService) {}

  @Post()
  create(@Body() createDailyDto: CreateDailyDto) {
    return this.dailiesService.create(createDailyDto);
  }

  @Get()
  findAll() {
    return this.dailiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyDto: UpdateDailyDto) {
    return this.dailiesService.update(+id, updateDailyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailiesService.remove(+id);
  }
}
