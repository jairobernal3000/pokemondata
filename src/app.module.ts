import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ormPokemon } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokeinfoModule } from './pokeinfo/pokeinfo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync(ormPokemon),
    PokeinfoModule
  ]
})
export class AppModule {}
