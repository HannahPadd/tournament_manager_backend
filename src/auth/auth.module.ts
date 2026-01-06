import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './services';
import { AuthController } from './controllers';
import { AccountModule } from '../account/account.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [forwardRef(() => AccountModule),
        JwtModule.register({
            global: true,
            secret: process.env.SECRET,
            signOptions: { expiresIn: '60s'},
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
