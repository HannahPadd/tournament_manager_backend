import { Module } from '@nestjs/common';
import { PersistanceModule } from '@persistance/persistance.module';
import { Services } from './services';
import { Controllers } from './controllers';

@Module({
    imports: [
        PersistanceModule
    ],
    providers: [...Services],
    controllers: [...Controllers]
})
export class TournamentModule {}
