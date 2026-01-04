import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Controllers } from './controllers';
import { Services } from './services';
import { Entities } from './entities';


@Module(
    {
        imports: [
            TypeOrmModule.forRoot({
                type: 'mariadb',
                host: process.env.DATABASE_URL,
                port: 3306,
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                entities: Entities,
                synchronize: true,
            }),
            TypeOrmModule.forFeature(Entities),
        ],
        controllers: Controllers,
        providers: Services,
        exports: Services
    })
export class CrudModule { }