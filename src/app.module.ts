import { Module } from '@nestjs/common';
import { Entities } from '@persistance/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AccountModule } from './account/account.module';
import { PersistanceModule } from './persistance/persistance.module';
import { TournamentModule } from './tournament/tournament.module';
import { MatchManagerModule } from './match-manager/match-manager.module';
import { BackwardsCompatModule } from './backwards-compat/backwards-compat.module';

@Module({
  imports: [
  ConfigModule.forRoot({
  isGlobal: true,
    }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'mariadb',
      host: config.getOrThrow('DATABASE_HOST'),
      port: 3306,
      username: config.getOrThrow('DATABASE_USER'),
      password: config.getOrThrow('DATABASE_PASSWORD'),
      database: config.getOrThrow('DATABASE_NAME'),
      entities: Entities,
      synchronize: true,
      })
    }),
    PersistanceModule,
    AuthModule,
    AccountModule,
    TournamentModule,
    MatchManagerModule,
    BackwardsCompatModule,
   ],
  controllers:[
    AuthController
  ],
  providers: [
    AuthService
  ],
})
export class AppModule { }
