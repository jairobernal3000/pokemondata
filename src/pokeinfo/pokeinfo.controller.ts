import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokeinfoService } from './pokeinfo.service';
import { CreatePokeinfoDto } from './dto/create-pokeinfo.dto';
import { UpdatePokeinfoDto } from './dto/update-pokeinfo.dto';

@Controller('pokeinfo')
export class PokeinfoController {
  constructor(private readonly pokeinfoService: PokeinfoService) {}

  @Post()
  create(@Body() createPokeinfoDto: CreatePokeinfoDto) {
    return this.pokeinfoService.create(createPokeinfoDto);
  }

  @Get()
  findAll() {
    return this.pokeinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokeinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokeinfoDto: UpdatePokeinfoDto) {
    return this.pokeinfoService.update(+id, updatePokeinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokeinfoService.remove(+id);
  }
}
