import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './controllers';
import { LocalAuthGuard, RolesGuard } from './guards';
import { AuthService } from './services';
import { Strategies } from './strategies';

import { AccountModule } from '@user/user.module';
import { PersistenceModule } from '@persistence/persistence.module';

import { JwtStrategy } from './strategies/jwt.strategy';

import jwtConfig from './config/jwt.config';
import refreshJwtConfig from './config/refresh.jwt.config';


@Module({
    imports: [
        PersistenceModule,
        AccountModule,
        PassportModule,
        JwtModule.registerAsync(jwtConfig.asProvider()),
        ConfigModule.forFeature(jwtConfig),
        ConfigModule.forFeature(refreshJwtConfig),
    ],
    providers: [
        AuthService,
        ...Strategies
    ],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}
