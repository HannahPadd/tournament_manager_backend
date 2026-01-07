import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './services';
import { AuthController } from './controllers';
import { AccountModule } from '../account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { PersistanceModule } from '@persistance/persistance.module';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        PersistanceModule,
        AccountModule,
        JwtModule.registerAsync({
            global: true,
            useFactory: (config: ConfigService) => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '10m'},
            }),
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
