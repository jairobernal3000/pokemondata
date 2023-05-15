import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from "@nestjs/config";
import { config  } from "dotenv";
config();

const configService = new ConfigService();

export const configDB: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('MYSQL_HOST'),
  port: configService.get<number>('MYSQL_PORT'),
  username: configService.get<string>('MYSQL_ROOT_USER'),
  password: configService.get<string>('MYSQL_ROOT_PASSWORD'),
  database: configService.get<string>('MYSQL_DATABASE_NAME'),
  entities: ["src/**/*.entity.{ts, js}"],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: [],
  logging: false
};

export const dataSource = new DataSource(configDB);

// npm run m:gen -d src/database/migrations/new-entity