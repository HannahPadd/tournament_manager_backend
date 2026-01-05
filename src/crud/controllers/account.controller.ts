import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AccountService } from '../services';
import { Account } from '../entities';
import { CreateAccountDto, UpdateAcountDto } from '../dtos';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    //TODO: implement login
    @Get('login')
    async respond() {
        return "yipppeeee, please start implementing login";
    }

}