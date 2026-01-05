import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, ValidationPipe } from '@nestjs/common';
import { AccountService } from '../services';
import { Account } from '../entities';
import { CreateAccountPlayerDto, UpdateAccountPlayerDto } from '../dtos';
import { AuthenticateUserDto } from '../dtos/credentials.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    //TODO: implement login
    @Post()
    async create(@Body(new ValidationPipe()) dto: CreateAccountPlayerDto) : Promise<Account> {
        return await this.service.create(dto);
    }

    @Post('/login')
    async login(@Body(new ValidationPipe()) credentials: AuthenticateUserDto) {
        return await this.service.login(credentials);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return req.user;
    }
}