import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BackwardCompatibilityController } from './backwardcompatibility.controller';
import { MatchManager } from './services/match.manager';
import { StandingManager } from './services/standing.manager';
import { SongRoller } from './services/song.roller';
import { TournamentCache } from './services/tournament.cache';
import { MatchGateway } from './gateways/match.gateway'
import { ScoringSystemProvider } from './services/IScoringSystem';
import { GameGateway } from './gateways/game.gateway';
import { LiveScoreGateway } from './gateways/live.score.gateway'
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [ 
    CrudModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
   ],
  controllers:[
    BackwardCompatibilityController
  ],
  providers: [
    TournamentCache,
    SongRoller,
    MatchManager,
    StandingManager,
    MatchGateway,
    ScoringSystemProvider,
    GameGateway,
    LiveScoreGateway
  ],
})
export class AppModule { }
