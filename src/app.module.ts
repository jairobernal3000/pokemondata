import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeinfoModule } from './pokeinfo/pokeinfo.module';
import { PokeinfoModule } from './pokeinfo/pokeinfo.module';

@Module({
  imports: [PokeinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
