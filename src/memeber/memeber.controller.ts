import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemeberService } from './memeber.service';
import { CreateMemeberDto } from './dto/create-memeber.dto';
import { UpdateMemeberDto } from './dto/update-memeber.dto';

@Controller('memeber')
export class MemeberController {
  constructor(private readonly memeberService: MemeberService) {}

  @Post()
  create(@Body() createMemeberDto: CreateMemeberDto) {
    return this.memeberService.create(createMemeberDto);
  }

  @Get()
  findAll() {
    return this.memeberService.findAll();
  }

  @Post(':id/pay')
  pay(@Param('id') id: number) {
    return this.memeberService.pay(id);
  }
}
