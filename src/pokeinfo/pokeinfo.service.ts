import { Injectable } from '@nestjs/common';
import { CreatePokeinfoDto } from './dto/create-pokeinfo.dto';
import { UpdatePokeinfoDto } from './dto/update-pokeinfo.dto';

@Injectable()
export class PokeinfoService {
  create(createPokeinfoDto: CreatePokeinfoDto) {
    return 'This action adds a new pokeinfo';
  }

  findAll() {
    return `This action returns all pokeinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokeinfo`;
  }

  update(id: number, updatePokeinfoDto: UpdatePokeinfoDto) {
    return `This action updates a #${id} pokeinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokeinfo`;
  }
}
