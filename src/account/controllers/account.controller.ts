import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, ValidationPipe, ConflictException, HttpException, UnprocessableEntityException } from '@nestjs/common';
import { AccountService } from '../services';
import { Account } from '@persistance/entities';
import { CreateAccountPlayerDto, UpdateAccountPlayerDto } from '../dtos';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    //TODO: avoid duplicate registrations
    @Post()
    async create(@Body(new ValidationPipe()) dto: CreateAccountPlayerDto) {
        return await this.service.create(dto);
    }

    //@UseGuards(AuthGuard)
    //@Get('profile')
    //async getProfile(@Request() req) {
    //    return req.user;
    //}
}