import { Module, forwardRef } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AccountService } from './services';
import  { Entities } from '@persistance/entities'
import { Services } from './services';
import { AccountController } from './controllers';
import { AuthService } from 'src/auth/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersistanceModule } from '@persistance/persistance.module';

@Module({
    imports: [
      PersistanceModule,
      AccountModule,],
    providers: [AccountService],
    controllers: [
      AccountController
    ],
    exports: [AccountService],
})
export class AccountModule{
  constructor(private datasource: DataSource) { }
}