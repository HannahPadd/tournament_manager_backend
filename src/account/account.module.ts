import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './services';
import { Services } from './services';
import { Controllers } from './controllers';
import { Entities } from './entities';
import { AuthService } from 'src/auth/services';

@Module({
    providers: [AccountService],
    exports: [forwardRef(() => AccountService)],
})
export class AccountModule{}