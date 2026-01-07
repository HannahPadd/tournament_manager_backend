import { Module } from '@nestjs/common';
import { Entities } from '@persistance/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BackwardCompatibilityController } from './backwards-compat/backwardcompatibility.controller';
import { MatchManager } from './match-manager/services/match.manager';
import { StandingManager } from './match-manager/services/standing.manager';
import { SongRoller } from './match-manager/services/song.roller';
import { TournamentCache } from './match-manager/services/tournament.cache';
import { MatchGateway } from './match-manager/gateways/match.gateway'
import { ScoringSystemProvider } from './match-manager/services/IScoringSystem';
import { GameGateway } from './match-manager/gateways/game.gateway';
import { LiveScoreGateway } from './match-manager/gateways/live.score.gateway'
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
TypeOrmModule.forRoot({
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3306,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: Entities,
    synchronize: true,
    }),
    PersistanceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
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
