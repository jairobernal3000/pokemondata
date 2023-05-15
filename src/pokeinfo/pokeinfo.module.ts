import { Module } from '@nestjs/common';
import { PokeinfoService } from './pokeinfo.service';
import { PokeinfoController } from './pokeinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokeInfo } from './entities/pokeinfo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PokeInfo]),
  ],
  controllers: [PokeinfoController],
  providers: [PokeinfoService]
})
export class PokeinfoModule {}
