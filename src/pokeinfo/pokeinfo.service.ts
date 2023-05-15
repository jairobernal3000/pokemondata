import { HttpStatus, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PokeInfo } from './entities/pokeinfo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { showConsoleError } from '../common/common.functions';
import { CreatePokeinfoDto, FilterPokeinfoDto, UpdatePokeinfoDto } from './dto';

@Injectable()
export class PokeinfoService {
  constructor(
    @InjectRepository(PokeInfo)
    private pokeInfoRepository: Repository<PokeInfo>
  ) { }

  private logger = new Logger();

  async create(createPokeinfoDto: CreatePokeinfoDto) {
    try {
      const { name } = createPokeinfoDto;
      const data = await this.pokeInfoRepository.findOne({ 
        where: {name}
      });

      if( !data ) {
        const pokemon = this.pokeInfoRepository.create(createPokeinfoDto);
        return await this.pokeInfoRepository.save(pokemon);
      }

      return data;
    }
    catch(error){
      const msg: string = 'Ocurrió un error al intentar crear el Pokemon';
      showConsoleError('pokeinfo/create', msg, error);
      throw new InternalServerErrorException(msg);
    }
  }

  async findAll(filtersDto: FilterPokeinfoDto) {
    try {

      if ( !filtersDto ) {
        filtersDto = <FilterPokeinfoDto>{};
      }

      let { name, base_experience, height } = filtersDto;

      const where: any = {};

      if (name){
        where.name = Like(`%${name}%`)
      }
      if (base_experience){
        where.base_experience = base_experience
      }
      if (height){
        where.height = height
      }

      const options: any = {};
      options.where = where;
      options.order = { name: "ASC" };


      const data = await this.pokeInfoRepository.find(
        options
      );
  
      return data;

    } catch (error) {

      const msg: string = 'Ocurrió un error al intentar consultar Pokemones';
      showConsoleError('pokeinfo/findAll', msg, error);
      if (error.status !== HttpStatus.INTERNAL_SERVER_ERROR) {
        throw error;
      }
      throw new InternalServerErrorException(msg);
    }
  }

  async findOne(id: number) {
    try{
      const pokemon = await this.pokeInfoRepository.findOneBy({
        id
      });
      return pokemon;
      }
      catch(error){
        const msg: string = `Ocurrió un error al intentar consultar el Pokemon ${id}`;
      showConsoleError('pokeinfo/findOne', msg, error);
        throw new InternalServerErrorException(msg);
      }
  }

  async update(id: number, updateDto: UpdatePokeinfoDto) {
    try {
      return await this.pokeInfoRepository.update( id, updateDto );
    } catch (error) {
      const msg: string = `Ocurrió un error al intentar actualizar el Pokemon ${id}`;
      showConsoleError('pokeinfo/update', msg, error);
      throw new InternalServerErrorException(msg);
    }
  }

  async remove(id: number) {
    try {
      const dataRemove = await this.findOne(id);
      const data = {
        Activo: false,
        remove: true
      }

      await this.pokeInfoRepository.delete( id );
      
      return {dataRemove, msg: 'Deleted'};
    } catch (error) {
      const msg: string = `Ocurrió un error al intentar borrar el Pokemon ${id}`;
      showConsoleError('pokeinfo/remove', msg, error);
      throw new InternalServerErrorException(msg);
    }
  }
}
