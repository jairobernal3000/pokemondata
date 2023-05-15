import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokeinfoService } from './pokeinfo.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePokeinfoDto, FilterPokeinfoDto, UpdatePokeinfoDto } from './dto';

@ApiTags('Poke Info')
@Controller('pokeinfo')
export class PokeinfoController {
  constructor(private readonly pokeinfoService: PokeinfoService) {}

  @Post()
  @ApiOperation({summary: 'Crear un Pokemon'})
  create(@Body() createPokeinfoDto: CreatePokeinfoDto) {
    return this.pokeinfoService.create(createPokeinfoDto);
  }

  @Get()
  @ApiOperation({summary: 'Buscar Pokemones'})
  findAll(@Query() filtersDto: FilterPokeinfoDto) {
    return this.pokeinfoService.findAll(filtersDto);
  }

  @Get(':id')
  @ApiOperation({summary: 'Buscar Pokemon por Id'})
  findOne(@Param('id') id: string) {
    return this.pokeinfoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Actualizar Pokemon por Id'})
  update(@Param('id') id: string, @Body() updatePokeinfoDto: UpdatePokeinfoDto) {
    return this.pokeinfoService.update(+id, updatePokeinfoDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Eliminar Pokemon por Id'})
  remove(@Param('id') id: string) {
    return this.pokeinfoService.remove(+id);
  }
}
