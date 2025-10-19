import { Injectable } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable() // isso é um decorator que marca a classe como injetável
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async create (data: HeroDto) {
    const hero = await this.prisma.hero.create({ data });

    return hero;
  }

  async findAll() {
    return this.prisma.hero.findMany();
  }
}
