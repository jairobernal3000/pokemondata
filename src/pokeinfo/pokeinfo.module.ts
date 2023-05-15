import { Module } from '@nestjs/common';
import { PokeinfoService } from './pokeinfo.service';
import { PokeinfoController } from './pokeinfo.controller';

@Module({
  controllers: [PokeinfoController],
  providers: [PokeinfoService]
})
export class PokeinfoModule {}
