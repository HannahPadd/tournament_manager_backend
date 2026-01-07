import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, ValidationPipe } from '@nestjs/common';
import { AccountService } from '../services';
import { Account } from '@persistance/entities';
import { CreateAccountPlayerDto, UpdateAccountPlayerDto } from '../dtos';
import { AuthenticateUserDto } from '../dtos';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    //TODO: implement login
    @Post()
    async create(@Body(new ValidationPipe()) dto: CreateAccountPlayerDto) : Promise<Account> {
        return await this.service.create(dto);
    }

    //@UseGuards(AuthGuard)
    //@Get('profile')
    //async getProfile(@Request() req) {
    //    return req.user;
    //}
}