import { Body, Controller, Post } from '@nestjs/common';
import type { HeroDto } from './dto/hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  async create(@Body() data: HeroDto) {
    return this.heroService.create(data);
  }
}
