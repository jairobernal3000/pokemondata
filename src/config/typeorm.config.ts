import { ConfigModule,  ConfigService } from "@nestjs/config"
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { join } from "path"

export default class TypeOrmConfig {
       
    static getOrmConfig( configService: ConfigService ): TypeOrmModuleOptions {              

        return {
            name: 'conn-pokemon',
            type: 'mysql',
            host: configService.get<string>('MYSQL_HOST'),
            port: Number(configService.get<number>('MYSQL_PORT')),
            database: configService.get<string>('MYSQL_DATABASE_NAME'),
            username: configService.get<string>('MYSQL_ROOT_USER'),
            password: configService.get<string>('MYSQL_ROOT_PASSWORD'),
            entities: [join(__dirname, '../**', '*.entity.{ts,js}')],
            synchronize: false,
            retryAttempts: 3,
            retryDelay: 3000,
            logging: false
        }
    }
}

export const ormPokemon: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
}