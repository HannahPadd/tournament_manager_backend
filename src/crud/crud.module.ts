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
                host: 'mariadb',
                port: 3306,
                username: 'root',
                password: 'example',
                database: 'tournament',
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