import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import type { HeroDto } from './dto/hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() data: HeroDto) {
    return this.heroService.create(data);
  }

  @Get()
  async findAll() {
    return this.heroService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: HeroDto) {
    return this.heroService.update(Number(id), data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.heroService.delete(Number(id));
  }
}
