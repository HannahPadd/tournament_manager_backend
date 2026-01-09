import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './controllers';
import { RolesGuard } from './guards';
import { AuthService } from './services';
import { LocalStrategy } from './strategies';

import { AccountModule } from '@user/user.module';
import { PersistenceModule } from '@persistence/persistence.module';


@Module({
    imports: [
        PersistenceModule,
        AccountModule,
        PassportModule,
        JwtModule.registerAsync({
            global: true,
            useFactory: (config: ConfigService) => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '10m'},
            }),
        }),
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        },
        AuthService,
        LocalStrategy
    ],
    controllers: [AuthController],
})
export class AuthModule {}
