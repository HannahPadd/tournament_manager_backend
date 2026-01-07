import { Module } from '@nestjs/common';
import { BackwardCompatibilityController } from './backwardcompatibility.controller';
import { TournamentModule } from 'src/tournament/tournament.module';
import { Services as TournamentModuleServices } from '../tournament/services';
import { Services as MatchManagerServices } from '../match-manager/services';
import { Gateways as MatchManagerGateways } from '../match-manager/gateways';
import { PersistanceModule } from '@persistance/persistance.module';
import { MatchManagerModule } from 'src/match-manager/match-manager.module';

@Module({
        imports: [
        PersistanceModule,
        TournamentModule,
        MatchManagerModule
    ],
    providers: [
        ...TournamentModuleServices,
        ...MatchManagerServices,
        ...MatchManagerGateways,
        BackwardCompatibilityController
    ],
})
export class BackwardsCompatModule {}
