import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AccountService } from '../services';
import { Account } from '../entities';
import { CreateAccountPlayerDto, UpdateAccountPlayerDto } from '../dtos';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    //TODO: implement login
    @Post()
    async create(@Body(new ValidationPipe()) dto: CreateAccountPlayerDto) : Promise<Account> {
        return await this.service.create(dto);
    }

}